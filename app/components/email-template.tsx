import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
  timestamp?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
  timestamp = new Date().toLocaleString(),
}) => (
  <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto font-sans">
    <div className="border-b border-gray-200 pb-4 mb-6">
      <h1 className="text-2xl font-bold text-gray-800">
        New message from {firstName}
      </h1>
      <p className="text-sm text-gray-500 mt-1">Received: {timestamp}</p>
    </div>

    <div className="mb-6">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold text-lg">
            {firstName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="font-medium text-gray-800">{firstName}</p>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 p-6 rounded-md">
      <h2 className="text-md font-semibold text-gray-700 mb-3">Message</h2>
      <div className="bg-white border border-gray-200 rounded p-4 whitespace-pre-wrap">
        {message}
      </div>
    </div>

    <div className="mt-6 pt-4 border-t border-gray-200 text-right">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
        Reply
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
        Archive
      </button>
    </div>
  </div>
);
