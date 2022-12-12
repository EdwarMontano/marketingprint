// import { GetRequestHooks} from './GetRequestHooks';
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { 
  AvisosIcon,         
  MayoristaIcon,
  GranFormatoIcon,
  CorteLaserIcon,
  ImpresionDigitalIcon,
  VehicularIcon,
  EmpaquesIcon,
  DisenoIcon,
  EstampadosIcon,
  DotacionIcon,
  LitografiaIcon,
} from "@heroicons/react/24/solid";
import Contador from "./GetRequestHooks";

const solutions = [
  {
    name: "VENTA MAYORISTA",
    description:
      "",
    href: "#Galery",
    icon: MayoristaIcon,
  },
  {
    name: "AVISOS",
    description: "",
    href: "#Galery",
    icon: AvisosIcon,
  },
  {
    name: "GRAN FORMATO",
    description: "",
    href: "#Galery",
    icon: GranFormatoIcon,
  },
  {
    name: "CORTE LASER",
    description: "",
    href: "#Galery",
    icon: CorteLaserIcon,
  },
  {
    name: "IMPRESIÓN DIGITAL",
    description:
      "",
    href: "#Galery",
    icon: ImpresionDigitalIcon,
  },
  {
    name: "DECORACIÓN VEHICULAR",
    description:
      "",
    href: "#Galery",
    icon: VehicularIcon,
  },
  {
    name: "BOLSAS",
    description: "",
    href: "#Galery",
    icon: EmpaquesIcon,
  },
  {
    name: "DISEÑO GRÁFICO",
    description: "",
    href: "#Galery",
    icon: DisenoIcon,
  },
  {
    name: "ESTAMPADOS",
    description: "",
    href: "#Galery",
    icon: EstampadosIcon,
  },
  {
    name: "DOTACIÓN EMPRESARIAL",
    description:
      "",
    href: "#Galery",
    icon: DotacionIcon,
  },
  {
    name: "LITOGRAFÍA",
    description: "",
    href: "#Galery",
    icon: LitografiaIcon,
  },
  // {
  //   name: "MOBILIARIOS",
  //   description: "",
  //   href: "#",
  //   icon: Squares2X2Icon,
  // },
  // {
  //   name: "VINILOS TEXTURIZADOS",
  //   description:
  //     "",
  //   href: "#",
  //   icon: ArrowPathIcon,
  // },
  // {
  //   name: "RENDERS",
  //   description: "",
  //   href: "#",
  //   icon: Squares2X2Icon,
  // },
  // {
  //   name: "BTL",
  //   description:
  //     "",
  //   href: "#",
  //   icon: ArrowPathIcon,
  // },
];
const callsToAction = [
  { name: "Contactar a Ventas", href: "https://api.whatsapp.com/send?phone=+573207881261&text=", icon: PhoneIcon },
  { name: "Ver Cátalogo", href: "#Galery", icon: PlayIcon },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    
    <Popover className="relative bg-[#292b33] ">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-black-100 py-6 h-[8vh] md:justify-start md:space-x-10">
          <div className="flex justify-start  lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Marketing Print</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/images/LOGOS/LOGO 2.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#292b33] p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:red-pink-500">
              <span className="sr-only">Abrir Menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-9 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-zinc-50" : "text-white",
                      "group inline-flex items-center rounded-md bg-[#292b33] text-base font-medium hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    )}
                  >
                    <span className="uppercase">Productos</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-white"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid grid-cols-2 gap-y-4 gap-x-8 bg-[#292b33] px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-center rounded-lg p-1 hover:bg-zinc-700"
                            >
                              <item.icon
                                className="h-12 w-12 flex-shrink-0 text-red-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-zinc-50">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-white-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 bg-[#292b33] px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-zinc-50 hover:bg-red-700"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#Galery"
              className="uppercase text-base font-medium text-white hover:text-zinc-50"
            >
              UBÍCANOS
            </a>
            <a
              href="#"
              className="uppercase text-base font-medium text-white hover:text-zinc-50"
            >
              Cotizar Aquí
            </a>

            
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-white hover:text-zinc-50"
            >
              Ingresa
              
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-500"
            >
              Rastrea
            </a>
            <Contador/> 
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#292b33] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/images/LOGOS/LOGO 2.svg"
                    alt="Marketing Print"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#292b33] p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-[#292b33]"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-red-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-zinc-50">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
              
            </div>
            <div className="space-y-6 py-6 px-5">             
                <div className="relative grid grid-cols-2 gap-y-4 gap-x-8">

                {callsToAction.map((item) => (
                  <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-zinc-50 hover:bg-red-700"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                ))}
                </div>
              <div className="flex gap-2">                
               
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-500"
                >
                  Ingresa
                </a>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-500"
                >
                  Rastrea
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  

  );
}
