import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface MapboxMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  markerTitle?: string;
}

const MapboxMap = ({ 
  latitude = 44.3167, 
  longitude = 0.4833, 
  zoom = 12,
  markerTitle = "Arkadhya - Centre Ayurvédique"
}: MapboxMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem('mapbox_token') || '';
  });
  const [inputToken, setInputToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);

  const handleSetToken = () => {
    if (inputToken.trim()) {
      localStorage.setItem('mapbox_token', inputToken.trim());
      setToken(inputToken.trim());
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [longitude, latitude],
        zoom: zoom,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for Arkadhya location
      const marker = new mapboxgl.Marker({
        color: '#8B7355',
      })
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="padding: 8px;">
              <strong>${markerTitle}</strong><br/>
              <small>461 route de la Côte Rouge<br/>47440 Pailloles</small>
            </div>`
          )
        )
        .addTo(map.current);

      // Open popup by default
      marker.togglePopup();

      map.current.on('load', () => {
        setIsMapReady(true);
      });

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Mapbox error:', error);
      localStorage.removeItem('mapbox_token');
      setToken('');
    }
  }, [token, latitude, longitude, zoom, markerTitle]);

  if (!token) {
    return (
      <div className="h-64 rounded-lg bg-secondary border border-border flex flex-col items-center justify-center p-6 gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span className="text-sm font-medium">Carte interactive</span>
        </div>
        <p className="text-xs text-muted-foreground text-center max-w-sm">
          Pour afficher la carte, entrez votre token Mapbox public.
          <br />
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            Obtenir un token gratuit sur mapbox.com
          </a>
        </p>
        <div className="flex gap-2 w-full max-w-sm">
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={inputToken}
            onChange={(e) => setInputToken(e.target.value)}
            className="flex-1 text-xs"
          />
          <Button onClick={handleSetToken} size="sm">
            Valider
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border shadow-sm">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapReady && (
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground text-sm">Chargement de la carte...</div>
        </div>
      )}
    </div>
  );
};

export default MapboxMap;
