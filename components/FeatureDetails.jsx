
import { ScrollArea } from "@/components/ui/scroll-area"
import React, { useRef, useEffect, useState } from 'react';
import Content from './content'
import { Button } from "@/components/ui/button"

import { MapPin, Building, Map, Ruler, FileText, User, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer"

  

const FeatureDetails = ({ isOpen, onClose, feature, isMobile }) => {

  

  

  const Content = () => (
    <div className="grid gap-6 py-4 z-10 ">
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

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-2xl font-bold">{feature.PLAN_NAME}</DrawerTitle>
          </DrawerHeader>
          <ScrollArea className="h-[60vh] px-6">
            <Content />
          </ScrollArea>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline"  onClick={onClose}>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{feature.PLAN_NAME}</DialogTitle>
          <Button onClick={onClose} className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <ScrollArea className="h-[50vh] pr-4">
          <Content />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDetails;
