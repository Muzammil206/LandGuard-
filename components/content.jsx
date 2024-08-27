
import React from 'react';
import { MapPin, Building, Map, Ruler, FileText, User } from 'lucide-react'; 

const Content = ({ feature }) => (
  <div className="grid gap-6 py-4">
    <div className="flex items-center space-x-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <MapPin className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Location</p>
        <p className="text-sm text-muted-foreground">{feature.PLAN_LOCATION}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <Building className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Local Government Area</p>
        <p className="text-sm text-muted-foreground">{feature.PLAN_LGA}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <Map className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Plan Area</p>
        <p className="text-sm text-muted-foreground">{feature.plan_area}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <Ruler className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Plan Origin</p>
        <p className="text-sm text-muted-foreground">{feature.plan_origi}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <FileText className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Plan Number</p>
        <p className="text-sm text-muted-foreground">{feature.PLAN_NUMBER}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <User className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Surveyor</p>
        <p className="text-sm text-muted-foreground">{feature.SURVEYOR}</p>
      </div>
    </div>
  </div>
);

export default Content;
