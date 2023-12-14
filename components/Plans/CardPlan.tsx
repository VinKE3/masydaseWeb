type IconItem = {
  id: number;
  icon: () => JSX.Element;
};
type CardPlanProps = {
  title: string;
  numComprobantes: string;
  price: string;
  icon: IconItem[];
};
import { listComprobantes } from "./CardPLan.data";
export function CardPlan({
  title,
  numComprobantes,
  price,
  icon,
}: CardPlanProps) {
  return (
    <div className="flex w-full flex-wrap lg:border border-gray-300 rounded-lg">
      <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
        <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-600 dark:bg-blueRadial degradedBlue font-medium leading-none mb-4 mt-2">
            {title}
          </h2>
          <span className="text-sm text-gray-600 dark:text-white">
            {numComprobantes}
          </span>
          <h2 className="text-4xl text-gray-600 dark:bg-blueRadial degradedBlue font-medium flex items-center justify-center leading-none mb-2 mt-6">
            S/{price}
            <span className="dark:text-gray-300 text-gray-600 text-base ml-1">
              /Mes
            </span>
          </h2>
        </div>
        <h1 className="text-center h-12 flex items-center justify-center">
          <p className="dark:text-white text-gray-600 px-2">
            {listComprobantes.map((item, index) => (
              <span key={index}>{item.title}</span>
            ))}
          </p>
          {icon.map((item, index) => {
            const IconComponent = item.icon;
            return <IconComponent key={index} />;
          })}
        </h1>
      </div>
    </div>
  );
}
