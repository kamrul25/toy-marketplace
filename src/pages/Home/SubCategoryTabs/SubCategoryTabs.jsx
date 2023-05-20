import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";

const SubCategoryTabs = () => {
  const [subCategory, setSubCategory] = useState("regular");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-gamma.vercel.app/category/${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [subCategory]);
  return (
    <div  data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center m-5">See Car Toys By Sub Category</h1>
      <Tabs>
        <div className="text-center">
          <TabList>
            <Tab onClick={() => setSubCategory("regular")}>
                <h1 className="text-2xl font-medium">Regular</h1>
            </Tab>
            <Tab onClick={() => setSubCategory("truck")}>
            <h1 className="text-2xl font-medium">Truck</h1>
            </Tab>
            <Tab onClick={() => setSubCategory("police")}>
            <h1 className="text-2xl font-medium">Police</h1>
            </Tab>
          </TabList>
        </div>

        <div className="w-10/12 mx-auto">
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between ">
              {toys.map((toy) => (
                <Category key={toy._id} toy={toy}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
              {toys.map((toy) => (
                <Category key={toy._id} toy={toy}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
              {toys.map((toy) => (
                <Category key={toy._id} toy={toy}></Category>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default SubCategoryTabs;
