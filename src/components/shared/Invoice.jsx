import React from 'react';
import { formatDate } from '../../utils/functions';
import Logo from '../../assets/images/logo-light.png';

const Invoice = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={Logo} alt="AFZ Logo" className="w-12 mr-2" />
          <h1 className="text-2xl font-bold">AFZ Delivery</h1>
        </div>
      </div>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Name:</span>
          <span>{data?.name || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Company:</span>
          <span>{data?.company || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Phone:</span>
          <span>{data?.phone || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">City:</span>
          <span>{data?.city || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date of Booking:</span>
          <span>{data?.createdAt ? formatDate(data.createdAt) : 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Height:</span>
          <span>{data?.height || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Land Line:</span>
          <span>{data?.landLine || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Length:</span>
          <span>{data?.length || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Payment Method:</span>
          <span>{data?.paymentMethod || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Postal Code:</span>
          <span>{data?.postalCode || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Barcode:</span>
          <span>{data?.qrCode || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Remarks:</span>
          <span>{data?.remarks || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">State:</span>
          <span>{data?.state || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Status:</span>
          <span>{data?.status ? 'Active' : 'Inactive'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Weight:</span>
          <span>{data?.weight || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Width:</span>
          <span>{data?.width || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default Invoice;