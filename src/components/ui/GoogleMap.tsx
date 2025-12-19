import React from 'react';

interface GoogleMapProps {
  address?: string;
  className?: string;
}

const GoogleMap = ({ 
  address = "461 route de la Côte Rouge, 47440 Pailloles, France",
  className = ""
}: GoogleMapProps) => {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className={`relative w-full h-64 rounded-lg overflow-hidden border border-border shadow-sm ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation Arkadhya - Centre Ayurvédique"
        className="absolute inset-0"
      />
    </div>
  );
};

export default GoogleMap;
