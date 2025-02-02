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
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


const CreateNewPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);


  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState(null);
  const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES")

  const [inputValue, setInputValue] = useState(""); // For tracking the input field value
  const [inputValueExcludes, setInputValueExcludes] = useState([]);
  const [itemsExcludes, setItemsExcludes] = useState([]);
  const [items, setItems] = useState([]); // For storing the array of objects
  const [countryData, setCountryData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({
    id: null,
    country_name: "",
  });
  const [allhotelInfo, setAllHotelInfo] = useState([]);
  const [hotelInfo, setHotelInfo] = useState({
    city: "",
    standard_hotel: "",
    room_type: "",
    supeior_hotel: "",
    room_type1: ""

  });


  
  const [priceValidityInfo, setPriceValidityInfo] = useState({
    standard:[],
    superior:[],
  });
  const [allPriceValidityInfo, setAllPriceValidityInfo] = useState([]);





  const [allItinerary, setAllItinerary] = useState([])
  const [itineraryInfo, setItineraryInfo] = useState({
    lunchTime: "",
    days: "",
    description: "",
  })

  const [tabIndex, setTabIndex] = useState(0);
  const [formValue, setFormValue] = useState([]);
console.log('tabindex',tabIndex)

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
        country_name: country.name,
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




  const handleAddTwo = () => {
    if (inputValueExcludes.trim() !== "") {
      const newItem = { text: inputValueExcludes, id: Date.now() }; // Create an object with text and unique ID
      setItemsExcludes([...itemsExcludes, newItem]); // Add new object to the array
      setInputValueExcludes(""); // Clear the input field
    }
  }


  // hotel form
  const handleSubmitHotel = (event) => {
    setAllHotelInfo(prev => {
      if (prev?.length) {
        return prev?.concat(hotelInfo)
      } else {
        return [hotelInfo]
      }
    })
    setTabIndex(1)
  };

// price & validity
const handleSubmitPriceValidity = () =>{
  setAllPriceValidityInfo(priceValidityInfo)
  setTabIndex(2)
}
  // itinerary form
  const handleSubmitItinerary = (event) => {
    setAllItinerary(prev => {
      if (prev?.length) {
        return prev?.concat(itineraryInfo)

      } else {
        return [itineraryInfo]
      }
    })
    setTabIndex(3)
  };




  const handleSubmit = async (values) => {
    try {

      const updatedValues = {
        ...values,
      };
      setFormValue(updatedValues)
      // form.resetFields()

      const formData = new FormData();
      formData.append("country_id", selectedCountry.id);
      formData.append("name", values.name);
      formData.append("description", editorContent);
      formData.append("price", values.price);
      formData.append("image", values.image[0].originFileObj);
      formData.append("includes_excludes", JSON.stringify({
        "includes": items?.map(i => i.text),
        "excludes": itemsExcludes?.map(i => i.text)
      }));
      formData.append("hotels", JSON?.stringify(allhotelInfo));
      formData.append("price_validity", JSON?.stringify(allPriceValidityInfo));
      formData.append("itinerary", JSON?.stringify(allItinerary));
      formData.append("days", values.days);


      formData.forEach((value, key) => {
        console.log('form data', key, value);
      });

      // const response = await axios.post("http://10.0.80.13:8000/api/admin/destination/store", formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      // Swal.fire({
      //   position: "top-center",
      //   icon: "success",
      //   title: "Package created successfully",
      // });
      // router.push('/admin/dashboard/create-packages')
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Error creating package",
      });
    }

  };


  return (
    <div className="bg-gray-200 ml-8 p-8 ">

      <div className="flex items-center gap-1 mb-6">
        <Link href="/admin/dashboard/create-packages"><span className="text-4xl font-bold text-primary"><LeftOutlined /></span></Link>
        <h1 className='text-4xl font-Roboto font-bold text-primary'>Create New Packages</h1>
      </div>

      <div className="">
        {/* form here */}
        <Form  form={form} onFinish={handleSubmit} layout="vertical" className="w-full">
          {/* select  */}
          <div className="mb-2">
            <p>Select the destination</p>
            <Form.Item
              name="country_name"

            >
              <Select
              style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}}
                placeholder="Enter the country name"
                className=""
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


          {/* Title Field */}
          <div className="mb-2">
            <p>Package name</p>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter the name!" }]}
            >
              <Input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} placeholder="Enter the package name" className="" />
            </Form.Item>
          </div>


          {/* Image Upload Field */}
          <div className=" mb-2">
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



          {/* Package description */}
          <div className=" mb-2">
            <TextEditor onChange={handleTextEditorChange} />
          </div>

          {/* Price Field */}
          <div className="mb-2">
            <p>Package price</p>
            <Form.Item
              name="price"
              rules={[{ required: true, message: "Please enter the price!" }]}
            >
              <Input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} placeholder="Enter the price of package" className="" type="number" min={0} />
            </Form.Item>
          </div>

          {/* Days */}
          <div className="mb-2">
            <p>Number of days</p>
            <Form.Item
              name="days"
              rules={[{ required: true, message: "Please enter the number of days!" }]}
            >
              <Input  style={{height:'44px'}} type="number" placeholder="Enter the days" className="" />
            </Form.Item>
          </div>

          {/* tab component here */}
          <div style={{width:'100%'}}>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} style={{ backgroundColor: "transparent", padding: "8px" }}>
              <TabList >
                <Tab style={{ backgroundColor: "transparent",  fontWeight: "700",color:'#4F4F4F' }}>INCLUDES & EXCLUDES</Tab>
                <Tab style={{ backgroundColor: "transparent",  fontWeight: "700",color:'#4F4F4F' }}>HOTELS</Tab>
                <Tab style={{ backgroundColor: "transparent",  fontWeight: "700",color:'#4F4F4F' }}>PRICE & VALIDITY</Tab>
                <Tab style={{ backgroundColor: "transparent",  fontWeight: "700",color:'#4F4F4F' }}>ITINERARY</Tab>
              </TabList>


              <TabPanel>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

                  <div className="">
                    <div className="flex justify-between gap-3 lg:border-r border-[#D1D1D1] border-opacity-30">
                      <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}}
                        type="text"
                        placeholder="Enter your includes text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleAdd}
                        className="border border-primary bg-primary text-white text-primary px-4 py-1 mr-4 rounded-lg"
                      >
                        Add
                      </button>
                    </div>

                    <div className="mt-4 pr-4 space-y-2">
                      {items.map((item, index) => (
                        <div key={item.id} className="p-2 border-b text-[16px] bg-[#FFFFF0] ">
                        <span>{index + 1} .</span>  {item.text}
                        </div>
                      ))}
                    </div>

                  </div>
                  <div className="">
                    <div className="flex justify-between gap-3">
                      <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}}
                        type="text"
                        placeholder="Enter your excludes text"
                        value={inputValueExcludes}
                        onChange={(e) => setInputValueExcludes(e.target.value)}
                        className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleAddTwo}
                        className="border border-primary bg-primary text-white text-primary px-4 py-1 mr-4 rounded-lg">
                        Add
                      </button>
                    </div>

                    <div className="mt-4 space-y-2 pr-4">
                      {itemsExcludes.map((item, index) => (
                        <div key={index} className="p-2 border-b text-[16px] bg-[#FFFFF0]">
                         <span>{index + 1} .</span> {item.text}
                        </div>
                      ))}
                    </div>
                  </div>

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
                        <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} name="city" placeholder="City" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                          ...hotelInfo,
                          city: e.target?.value
                        })} />
                      </div>
                      {/* Standard Hotel */}
                      <div>
                        <p>Standard Hotel</p>
                        <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} name="hotel" placeholder="Standard Hotel" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                          ...hotelInfo,
                          standard_hotel: e.target?.value
                        })} />
                      </div>
                      {/* Room Type One */}
                      <div>
                        <p>Room Type</p>
                        <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} name="roomTypeOne" placeholder="Room Type" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                          ...hotelInfo,
                          room_type: e.target?.value
                        })} />
                      </div>
                      {/* Supeior Hotel */}
                      <div>
                        <p>Supeior Hotel</p>
                        <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} name="supeior_hotel" placeholder="Supeior Hotel" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                          ...hotelInfo,
                          supeior_hotel: e.target?.value
                        })} />
                      </div>
                      {/* Room Type Two */}
                      <div>
                        <p>Room Type</p>
                        <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} name="roomTypeTwo" placeholder="Room Type" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                          ...hotelInfo,
                          room_type1: e.target?.value
                        })} />
                      </div>
                    </div>

                    <div className="py-8">
                      <button onClick={() => handleSubmitHotel()} type="button" className="bg-[#1E1E1E]  text-white px-6 py-1 rounded">Save Hotel</button>
                    </div>
                  </form>

                </div>
              </TabPanel>

              {/* price and validity */}
              <TabPanel>
                <div className="flex flex-col  rounded-md">

                  <div className="flex justify-between">
                    {/* tab-panel one */}
                    <div className="p-4 w-1/2">
                      <h1 className="text-xl font-bold font-Roboto text-primary py-2">Standard</h1>
                      <div className="space-y-4">


                        
                        {/* 2px for */}
                        <div>
                          <p>2 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="two" placeholder="2px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to number

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.standard]; // Copy existing array
                               updatedStandard[0] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 standard: updatedStandard, // Update the 'standard' array
                               };
                             });
                          }} />
                        </div>
                        {/* 4px for */}
                        <div>
                          <p>4 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="four" placeholder="4px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to number

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.standard]; // Copy existing array
                               updatedStandard[1] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 standard: updatedStandard, // Update the 'standard' array
                               };
                             });
                          }}  />
                        </div>
                        {/* 6px for */}
                        <div>
                          <p>6 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="six" placeholder="6px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to number

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.standard]; // Copy existing array
                               updatedStandard[2] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 standard: updatedStandard, // Update the 'standard' array
                               };
                             });
                          }}  />
                        </div>
                        {/* 8px for */}
                        <div>
                          <p>8 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="eight" placeholder="8px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to number

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.standard]; // Copy existing array
                               updatedStandard[3] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 standard: updatedStandard, // Update the 'standard' array
                               };
                             });
                          }}  />
                        </div>
                        {/* Single Supplement for */}
                        <div>
                          <p>Single Supplement</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="single_supplement" placeholder="Single Supplement" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500"
                            onChange={(e) => {
                              const newValue = (e.target.value); // Convert input to number
 
                              setPriceValidityInfo((prev) => {
                                const updatedStandard = [...prev.standard]; // Copy existing array
                                updatedStandard[4] = newValue; // Insert/Update at specific index
                          
                                return {
                                  ...prev,
                                  standard: updatedStandard, // Update the 'standard' array
                                };
                              });
                           }} 
                          />
                        </div>

                      </div>
                    </div>

                    {/* tab-panel two */}
                    <div className="p-4 w-1/2">
                      <h1 className="text-xl font-bold font-Roboto text-primary py-2">superior</h1>
                      <div className="space-y-4">
                        {/* 2px for */}
                        <div>
                          <p>2 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="two" placeholder="2px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to 

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.superior]; // Copy existing array
                               updatedStandard[0] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 superior: updatedStandard, // Update the 'superior' array
                               };
                             });
                          }} />
                        </div>
                        {/* 4px for */}
                        <div>
                          <p>4 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="four" placeholder="4px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to number

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.superior]; // Copy existing array
                               updatedStandard[1] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 superior: updatedStandard, // Update the 'superior' array
                               };
                             });
                          }}  />
                        </div>
                        {/* 6px for */}
                        <div>
                          <p>6 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="six" placeholder="6px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to number

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.superior]; // Copy existing array
                               updatedStandard[2] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 superior: updatedStandard, // Update the 'superior' array
                               };
                             });
                          }}  />
                        </div>
                        {/* 8px for */}
                        <div>
                          <p>8 Pax</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="eight" placeholder="8px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                             const newValue = (e.target.value); // Convert input to number

                             setPriceValidityInfo((prev) => {
                               const updatedStandard = [...prev.superior]; // Copy existing array
                               updatedStandard[3] = newValue; // Insert/Update at specific index
                         
                               return {
                                 ...prev,
                                 superior: updatedStandard, // Update the 'superior' array
                               };
                             });
                          }}  />
                        </div>
                        {/* Single Supplement for */}
                        <div>
                          <p>Single Supplement</p>
                          <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="single_supplement" placeholder="Single Supplement" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500"
                            onChange={(e) => {
                              const newValue = (e.target.value); // Convert input to number
 
                              setPriceValidityInfo((prev) => {
                                const updatedStandard = [...prev.superior]; // Copy existing array
                                updatedStandard[4] = newValue; // Insert/Update at specific index
                          
                                return {
                                  ...prev,
                                  superior: updatedStandard, // Update the 'standard' array
                                };
                              });
                           }} 
                          />
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="pl-4 py-8">
                    <button onClick={() => handleSubmitPriceValidity()} type="button" className="bg-gray-500 text-white px-6 py-1 rounded">Save Validaty</button>
                  </div>
                </div>


              </TabPanel>







              {/* Itinerary */}
              <TabPanel>
                <div className="p-4">
                  <h1 className="text-xl font-bold font-Roboto text-primary py-2">ITINERARY</h1>

                  <form>
                    <div className="space-y-4">
                      {/* LunchTime */}
                      <div>
                        <p>Itinerary for</p>
                        <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="text" name="lunchTime" placeholder="Itinerary name" className="border px-2 py-1 outline-none bg-transparent border-gray-500 rounded" onChange={(e) => setItineraryInfo({
                          ...itineraryInfo,
                          lunchTime: e.target?.value
                        })} />
                      </div>

                      {/* days */}
                      <div>
                        <p>Day</p>
                        <input  style={{height:'44px',width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} required type="number" name="day" placeholder="Days" className="border px-2 py-1 outline-none bg-transparent border-gray-500 rounded" onChange={(e) => setItineraryInfo({
                          ...itineraryInfo,
                          days: e.target?.value
                        })} />
                      </div>


                      {/* description */}
                      <div>
                        <p>Itinery Description</p>
                        <textarea style={{width:'100%',backgroundColor:'white',border:'1px solid #D1D1D1'}} name="description" placeholder="Enter Your Description...." rows={10} cols={60} className="border p-2 outline-none bg-transparent border-gray-500 rounded" onChange={(e) => setItineraryInfo({
                          ...itineraryInfo,
                          description: e.target?.value
                        })}></textarea>
                      </div>
                    </div>

                    <div className="py-8">
                      <button type="button"
                        onClick={() => handleSubmitItinerary()}
                        className="bg-gray-500 text-white px-6 py-1 rounded">Save Itinerary</button>
                    </div>
                  </form>

                </div>



              </TabPanel>
            </Tabs>
          </div>


            <div className="flex items-center justify-end">
          <Button classNames="" htmlType="submit" type="primary" className="mt-4" style={{ backgroundColor: "#F49D2A",height:'44px',fontSize:'16px',fontWeight:'500'}}>
            Published Packege
          </Button> 
            </div>
        </Form>
      </div>
    </div>
  )
}

export default CreateNewPage;