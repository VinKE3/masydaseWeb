import React from "react";
interface CardServicesProps {
  icon: any;
  title: string;
  text: string;
}
export function CardServices({ icon: Icon, title, text }: CardServicesProps) {
  return (
    <div className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full dark:bg-grayDark bg-teal-400 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <Icon className="text-azul dark:text-secondary" />
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">
            {title}
          </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-grayDark">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
