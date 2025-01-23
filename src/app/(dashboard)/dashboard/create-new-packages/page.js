'use client';


import { Select, Input, Button, Form, Upload } from "antd";
import { LeftOutlined } from "@ant-design/icons"
import Image from "next/image"
import TextEditor from "@/app/components/textEditor/TextEditor";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CreateNewPage = () => {

  const [loading, setLoading] = useState(true);

  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState(null);
  const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES")

  const [inputValue, setInputValue] = useState(""); // For tracking the input field value
  const [inputValueExcludes, setInputValueExcludes] = useState("");
  const [itemsExcludes, setItemsExcludes] = useState([]);
  const [items, setItems] = useState([{}]); // For storing the array of objects
  const [countryData, setCountryData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({
    id: null,
    name: "",
  });
  const [allhotelInfo, setAllHotelInfo] = useState([]);
  const [hotelInfo, setHotelInfo] = useState({
    city : "",
    standard_hotel : "",
    room_type : "", 
    supeior_hotel : "",
    room_type1 : ""

  });

  const [priceValidityInfo, setPriceValidityInfo] = useState([]);
  const [allPriceValidityInfo, setAllPriceValidityInfo] = useState([]);


  const [itineryInfo, setItineryInfo] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [formValue, setFormValue] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://10.0.80.13:8000/api/admin/country');
      const result = await response.json();
      setCountryData(result.countries.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setLoading(false)
  }, [])


  const handleChange = (value) => {
    // Find the selected country from the data array
    const country = countryData.find((singleCountry) => singleCountry.id === value);

    if (country) {
      // Update state with the selected country's details
      setSelectedCountry({
        id: country.id,
        name: country.name,
      });
    }
  };


  const handleTextEditorChange = (plainText) => {
    setEditorContent(plainText)
  };



  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      const newItem = { text: inputValue, id: Date.now() }; // Create an object with text and unique ID
      setItems([...items, newItem]); // Add new object to the array
      setInputValue(""); // Clear the input field
    }
  };

  const inludes = items?.map(i => i.text)


  const handleAddTwo = () => {
    if (inputValueExcludes.trim() !== "") {
      const newItem = { text: inputValueExcludes, id: Date.now() }; // Create an object with text and unique ID
      setItemsExcludes([...itemsExcludes, newItem]); // Add new object to the array
      setInputValueExcludes(""); // Clear the input field
    }
  }


  // hotel form
  const handleSubmitHotel = (event) => {
  
    setAllHotelInfo(prev=>{
      if(prev?.length){
      return  prev?.concat(hotelInfo)

      }else{
        return [hotelInfo]
      }
    })
  

  };



 

  const handleSubmit = async (values) => {
    try {

      const updatedValues = {
        ...values,
      };
      setFormValue(updatedValues)
      // form.resetFields()

  
      const formData = new FormData();
      // formData.append("image", formValue.image[0].originFileObj) || null; 
      formData.append("description", editorContent);
      formData.append("title", formValue.title);
      formData.append("price", formValue.price);
      formData.append("days", formValue.days);
      formData.append("country_id", selectedCountry.id);
      formData.append("name", selectedCountry.name);
      formData.append("hotels", JSON?.stringify(allhotelInfo));
      formData.append("includes_excludes", JSON.stringify({
        "includes": items?.map(i => i.text),
        "excludes": itemsExcludes?.map(i => i.text)
      }));
  
  console.log(formData)
  
   

      const response = await axios.post("http://10.0.80.13:8000/api/admin/destination/store", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Package created successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    
  };

  // if (loading) {
  //   return <div>Loading</div>
  // }



  return (
    <div className="bg-gray-200 m-8 p-8 ">
      <div className="flex  items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
      </div>
      <div className="flex items-center gap-1">
        <a href="/dashboard/create-packages"><span className="text-[30px] font-bold text-primary"><LeftOutlined /></span></a>
        <h1 className='text-[24px] font-Roboto font-bold text-primary'>Create New Packages</h1>
      </div>

      <div className="p-8">
        {/* form here */}
        <Form form={form} onFinish={handleSubmit} layout="vertical" className="">
          {/* select  */}
          <div className="mb-2">
            <p>Select the continent</p>
            <Form.Item
              name="continent"

            >
              <Select
                placeholder="Enter the country name"
                className="max-w-xl"
                onChange={handleChange}
              >
                {countryData?.map((singleCountry, index) => (
                  <Select.Option key={index} value={singleCountry.id}>
                    {singleCountry.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

          </div>


          {/* Image Upload Field */}
          <div className="max-w-xl mb-2">
            <p>Add package image</p>
            <Form.Item
              name="image"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[
                { required: true, message: "Please upload an image!" },
                { validator: (_, value) => (value?.[0]?.type?.startsWith("image/") ? Promise.resolve() : Promise.reject("File must be an image")) },
              ]}
            >
              <Upload beforeUpload={() => false} listType="picture">
                <Button>Upload Image</Button>
              </Upload>
            </Form.Item>
          </div>

          {/* Title Field */}
          <div className="mb-2">
            <p>Package title</p>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Please enter the title!" }]}
            >
              <Input placeholder="Enter the destination name" className="max-w-xl" />
            </Form.Item>
          </div>

          {/* Package description */}
          <div className="max-w-xl mb-2">
            <TextEditor onChange={handleTextEditorChange} />
          </div>

          {/* Price Field */}
          <div className="mb-2">
            <p>Package price</p>
            <Form.Item
              name="price"
              rules={[{ required: true, message: "Please enter the price!" }]}
            >
              <Input placeholder="Enter the price of package" className="max-w-xl" type="number" min={0} />
            </Form.Item>
          </div>

          {/* Days */}
          <div className="mb-2">
            <p>Number of days</p>
            <Form.Item
              name="days"
              rules={[{ required: true, message: "Please enter the number of days!" }]}
            >
              <Input type="number" placeholder="Enter the days" className="max-w-xl" />
            </Form.Item>
          </div>

          {/* tab component here */}
          <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} style={{border:"1px solid #F49D2A",borderRadius:"4px", padding:"8px"}}>
              <TabList>
                <Tab style={{fontWeight: "700" }}>INCLUDES & EXCLUDES</Tab>
                <Tab style={{fontWeight: "700" }}>HOTELS</Tab>
                <Tab style={{fontWeight: "700" }}>PRICE & VALIDITY</Tab>
                <Tab style={{fontWeight: "700" }}>ITINERARY</Tab>
              </TabList>


              <TabPanel>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

                  <div className="p-4">
                    <div className="flex justify-between lg:border-r border-[#D1D1D1] border-opacity-30">
                      <input
                        type="text"
                        placeholder="Enter your text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleAdd}
                        className="border border-primary hover:bg-primary hover:text-white text-primary px-4 py-1 mr-4 rounded-lg"
                      >
                        Add
                      </button>
                    </div>

                    <div className="mt-4">
                      {items.map((item, index) => (
                        <div key={item.id} className="p-2 border-b">
                        {index + 1}. {item.text}
                      </div>
                      ))}
                    </div>

                  </div>
                  <div className="p-4">
                    <div className="flex justify-between ">
                      <input
                        type="text"
                        placeholder="Enter your text"
                        value={inputValueExcludes}
                        onChange={(e) => setInputValueExcludes(e.target.value)}
                        className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleAddTwo}
                        className="border border-primary hover:bg-primary hover:text-white text-primary px-4 py-1 mr-4 rounded-lg">
                        Add
                      </button>
                    </div>

                    <div className="mt-4">
                      {itemsExcludes.map((item, index) => (
                        <div key={item.id} className="p-2 border-b">
                          {index + 1}. {item.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="py-8">
                    <button type="button" className="bg-primary text-white px-6 py-1 rounded">Save</button>
                  </div> */}
                </div>
              </TabPanel>
                      {/* hotel tab  */}
              <TabPanel>
                <div className="p-4">
                  <h1 className="text-xl font-bold font-Roboto text-primary py-2">Hotel</h1>

                  <form >
                    <div className="space-y-4">
                      {/* City */}
                      <div>
                        <p>City</p>
                        <input  name="city" placeholder="City" className="border px-2 py-1 outline-none" onChange={(e)=>setHotelInfo({
                          ...hotelInfo,
                          city : e.target?.value
                        })} />
                      </div>
                      {/* Standard Hotel */}
                      <div>
                        <p>Standard Hotel</p>
                        <input  name="hotel" placeholder="Standard Hotel" className="border px-2 py-1 outline-none"  onChange={(e)=>setHotelInfo({
                          ...hotelInfo,
                          city : e.target?.value
                        })}  />
                      </div>
                      {/* Room Type One */}
                      <div>
                        <p>Room Type</p>
                        <input  name="roomTypeOne" placeholder="Room Type" className="border px-2 py-1 outline-none"  onChange={(e)=>setHotelInfo({
                          ...hotelInfo,
                          room_type : e.target?.value
                        })} />
                      </div>
                      {/* Supeior Hotel */}
                      <div>
                        <p>Supeior Hotel</p>
                        <input  name="supeiorHotel" placeholder="Supeior Hotel" className="border px-2 py-1 outline-none"  onChange={(e)=>setHotelInfo({
                          ...hotelInfo,
                          standard_hotel : e.target?.value
                        })} />
                      </div>
                      {/* Room Type Two */}
                      <div>
                        <p>Room Type</p>
                        <input  name="roomTypeTwo" placeholder="Room Type" className="border px-2 py-1 outline-none"  onChange={(e)=>setHotelInfo({
                          ...hotelInfo,
                          room_type1 : e.target?.value
                        })} />
                      </div>
                    </div>

                    <div className="py-8">
                      <button onClick={()=> handleSubmitHotel()} type="button" className="bg-primary text-white px-6 py-1 rounded">Save Hotel</button>
                    </div>
                  </form>

                </div>
              </TabPanel>

              <TabPanel>
                <div className="p-4">
                  <h1 className="text-xl font-bold font-Roboto text-primary py-2">PRICE & VALIDITY</h1>

                  <form >
                    <div className="space-y-4">
                      {/* 2px for */}
                      <div>
                        <p>2 Pax</p>
                        <input required type="number" name="two" placeholder="2px" className="border px-2 py-1 outline-none" />
                      </div>
                      {/* 4px for */}
                      <div>
                        <p>4 Pax</p>
                        <input required type="number" name="four" placeholder="4px" className="border px-2 py-1 outline-none" />
                      </div>
                      {/* 6px for */}
                      <div>
                        <p>6 Pax</p>
                        <input required type="number" name="six" placeholder="6px" className="border px-2 py-1 outline-none" />
                      </div>
                      {/* 8px for */}
                      <div>
                        <p>8 Pax</p>
                        <input required type="number" name="eight" placeholder="8px" className="border px-2 py-1 outline-none" />
                      </div>
                      {/* Single Supplement for */}
                      <div>
                        <p>Single Supplement</p>
                        <input required type="number" name="singleSupplement" placeholder="Single Supplement" className="border px-2 py-1 outline-none" />
                      </div>

                    </div>
                    <div className="py-8">
                      <button type="button" className="bg-primary text-white px-6 py-1 rounded">Save Validaty</button>
                    </div>
                  </form>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="p-4">
                  <h1 className="text-xl font-bold font-Roboto text-primary py-2">ITINERARY</h1>

                  <form>
                    <div className="space-y-4">
                      {/* LunchTime */}
                      <div>
                        <p>LunchTime</p>
                        <input required type="text" name="lunchTime" placeholder="LunchTime" className="border px-2 py-1 outline-none" />
                      </div>

                      {/* days */}
                      <div>
                        <p>Days</p>
                        <input required type="number" name="days" placeholder="Days" className="border px-2 py-1 outline-none" />
                      </div>


                      {/* description */}
                      <div>
                        <p>Itinery Description</p>
                        <textarea name="description" placeholder="Enter Your Description...." rows={10} cols={60} className="border p-2 outline-none"></textarea>
                      </div>
                    </div>

                    <div className="py-8">
                      <button type="submit" className="bg-primary text-white px-6 py-1 rounded">Save Itinerary</button>
                    </div>
                  </form>

                </div>
              </TabPanel>
            </Tabs>
          </div>

          <Button htmlType="submit" type="primary" className="mt-4" style={{ backgroundColor: '#F49D2A', color: 'white' }}>
            Published Packege
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CreateNewPage;
