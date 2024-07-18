import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../../features/servicesSlice";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ServicesTable = () => {
  const dispatch = useDispatch();
  const { services, categories, loading, error } = useSelector(
    (state) => state.services
  );

  const [checked, setChecked] = useState(false);
  const [checkedServices, setCheckedServices] = useState({});

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (!checked) {
      const checkedServicesObj = {};
      categories.forEach((category) => {
        checkedServicesObj[category] = services
          .filter((service) => service.category === category)
          .map((service) => service.id);
      });
      setCheckedServices(checkedServicesObj);
    } else {
      setCheckedServices({});
    }
  };

  const handleServiceCheckboxChange = (serviceId, categoryId) => {
    if (checkedServices[categoryId]) {
      const serviceIds = checkedServices[categoryId];
      if (serviceIds.includes(serviceId)) {
        serviceIds.splice(serviceIds.indexOf(serviceId), 1);
      } else {
        serviceIds.push(serviceId);
      }
      setCheckedServices((prevCheckedServices) => ({
        ...prevCheckedServices,
        [categoryId]: serviceIds,
      }));
    }
  };

  const checkedServicesCount = Object.values(checkedServices).reduce(
    (acc, serviceIds) => acc + serviceIds.length,
    0
  );

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <table className="w-full bg-card my-2 border border-border shadow-sm relative">
        <thead className="shadow-sm border-b">
          <tr>
            <th scope="col" className="w-2 px-2 py-2">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
              </div>
              {checked && (
                <div className="flex items-center gap-x-2 absolute top-2 left-8">
                  <span className="text-sm font-medium whitespace-nowrap border border-border inline-block bg-white px-1 py-0.5 rounded-sm shadow-sm">
                    {checkedServicesCount} Services Selected
                  </span>
                  <button className="text-sm font-medium px-1 py-0.5">
                    Batch Operation
                  </button>
                </div>
              )}
            </th>
            <th scope="col" className="text-left w-2 px-2 py-1 font-medium">
              ID
            </th>
            <th scope="col" className="text-left px-2 py-1 font-medium">
              Service
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Service Type
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Refill
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Cancell
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Price
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Min
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Max
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Status
            </th>
            <th scope="col" className="px-2 py-1 font-medium  text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <React.Fragment key={category}>
              <tr className="border-b border-border">
                <td
                  colSpan={10}
                  className="text-left px-2 py-1 font-medium text-black text-md"
                >
                  {category}
                </td>
                <td className="flex items-center">
                  <MdModeEdit className="size-5 text-primary" />{" "}
                  <MdDelete className="size-5 text-destructive" />
                </td>
              </tr>
              {services
                .filter((service) => service.category === category)
                .map((service) => (
                  <tr key={service.id} className="border-b border-border">
                    <td className="w-2 px-2 py-1">
                      <input
                        type="checkbox"
                        checked={
                          checkedServices[category] &&
                          checkedServices[category].includes(service.id)
                        }
                        onChange={() =>
                          handleServiceCheckboxChange(service.id, category)
                        }
                      />
                    </td>
                    <td className="text-left w-2 px-2 py-1 text-md">
                      {service.service}
                    </td>
                    <td className="px-2 py-1 text-sm">{service.name}</td>
                    <td className="px-2 py-1 text-sm">{service.type}</td>
                    <td className="px-2 py-1 text-sm">
                      {service.refill ? "Yes" : "No"}
                    </td>
                    <td className="px-2 py-1 text-sm">
                      {service.cancel ? "Yes" : "No"}
                    </td>
                    <td className="px-2 py-1 text-sm">{service.rate}</td>
                    <td className="px-2 py-1 text-sm">{service.min}</td>
                    <td className="px-2 py-1 text-sm">{service.max}</td>
                    <td className="px-2 py-1 text-sm">Enabled</td>
                    <td className="px-2 py-1 text-sm">{service.action}</td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
