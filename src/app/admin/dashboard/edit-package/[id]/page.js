"use client";

import { LeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Select, Input, Button, Form, Upload, Row, Col, Modal } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextEditor from "@/app/components/textEditor/TextEditor";
import axios from "axios";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import Title from "antd/es/skeleton/Title";
import Link from "next/link";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Dynamic import for JoditEditor
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });




const EditPackage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [form] = Form.useForm();
  const [tabIndex, setTabIndex] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [singlePackage, setSinglePackage] = useState({});
  const [editorContent, setEditorContent] = useState("");

  const [inputValue, setInputValue] = useState(""); // For tracking the input field value
  const [inputValueExcludes, setInputValueExcludes] = useState([]);
  const [itemsExcludes, setItemsExcludes] = useState([]);
  const [items, setItems] = useState([]); // For storing the array of objects
  const [includes, setIncludes] = useState([]);
  const [excludes, setExclues] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [fileList, setFileList] = useState([]);

  // first modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hotelText, sethotelText] = useState();

  // second modal
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [privacyText, setPrivacyText] = useState("");

  console.log(singlePackage.hotels)













  const handleAddTwo = () => {
    if (inputValueExcludes.trim() !== "") {
      const newItem = { text: inputValueExcludes, id: Date.now() }; // Create an object with text and unique ID
      setItemsExcludes([...itemsExcludes, newItem]); // Add new object to the array
      setInputValueExcludes(""); // Clear the input field
    }
  }








  //========= first modal start=========================
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //========== first modal end ===========================





  // ====== second modal start =======================
  const showPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const handlePrivacyOk = () => {
    setIsPrivacyModalOpen(false);
  };

  const handlePrivacyCancel = () => {
    setIsPrivacyModalOpen(false);
  };
  // ====== second modal end =======================







  // image upload start ============
  const handleImageChange = ({ fileList: newFileList }) => {
    // Keep only the latest file
    setFileList(newFileList.slice(-1));
    form.setFieldsValue({ image: newFileList.slice(-1) }); // Sync with the form
  };

  const handleBeforeUpload = (file) => {
    // Reset fileList and allow only the current image to be added
    setFileList([file]);
    return false; // Prevent automatic upload
  };

  // image upload end ============


  useEffect(() => {
    // Fetch the package details
    const fetchSingleData = async () => {
      try {
        const response = await axios.get(`http://10.0.80.13:8000/api/admin/destination/${id}`);
        setSinglePackage(response.data.destination);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    fetchSingleData();
  }, [id]);

  useEffect(() => {
    // Fetch country data
    const fetchCountryData = async () => {
      try {
        const response = await axios.get("http://10.0.80.13:8000/api/admin/country");
        setCountryData(response.data.countries.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    // Populate form with fetched data
    if (singlePackage?.id) {
      // Ensure the image is formatted correctly for the Upload component
      const formattedData = {
        ...singlePackage,
        image: singlePackage.image
          ? [
            {
              uid: "-1", // Unique identifier for the file
              name: singlePackage.image.split('/').pop(), // Extract the file name from the URL
              status: "done", // Status to show the file is uploaded
              url: singlePackage.image, // URL of the uploaded image
            },
          ]
          : [], // Default to an empty array if no image exists
      };

      form.setFieldsValue(formattedData);
      setEditorContent(singlePackage.description || "");
    }
  }, [singlePackage, form]);


  const handleSubmitPackage = async (values) => {
    console.log(values)
    try {
      const formData = new FormData();

      // Append all required fields, matching Postman
      formData.append("country_id", values?.country_id || "24"); // Default value for testing
      formData.append("name", values.name || "test_name");
      formData.append("description", editorContent || "<p>Default Description</p>");
      formData.append("price", values.price || "1399");
      formData.append("days", values.days || "7");
      formData.append("_method", "PUT"); // Ensure this is included
      // formData.append("title", values.title || "Default Title"); // Optional field
      // formData.append(
      //   "includes_excludes",
      //   values.includes_excludes || '{"defaultKey": "defaultValue"}' // Optional JSON field
      // );

      // Handle image field
      if (fileList[0]?.originFileObj) {
        formData.append("image", fileList[0].originFileObj);
      } else {
        formData.append("image", ""); // Null if no image, matching Postman
      }

      const includes_excludes = {
        includes: includes,
        excludes: excludes
    };
    
    formData.append('includes_excludes', JSON.stringify(includes_excludes));
    

      // Log FormData for debugging
      // formData.forEach((value, key) => {
      //   console.log(`${key}:`, value);
      // });

      // Send request via Axios
      const response = await axios.post(
        `http://10.0.80.13:8000/api/admin/destination/update/${id || "105"}`, // Replace with the correct ID
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Let Axios handle this automatically
          },
        }
      );

      console.log(response)
      

      if (response.data.success) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: 'Package Update Succesfully',
        })
        router.push('/admin/dashboard/create-packages')
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else {
        console.error("Unexpected Error:", error.message);
      }
    }
  };


 
 

  useEffect(() => {
    if (singlePackage?.includes_excludes?.includes) {
      setIncludes(singlePackage.includes_excludes.includes);
    } else {
      console.warn("No includes data found");
    }
  }, [singlePackage]);


  useEffect(() => {
    if (singlePackage?.includes_excludes?.excludes) {
      setExclues(singlePackage.includes_excludes.excludes);
    } else {
      console.warn("No exclues data found");
    }
  }, [singlePackage]);

  // Handle input changes
  const handleInputChange = (index, value) => {
    const updatedIncludes = [...includes];
    updatedIncludes[index] = value;
    setIncludes(updatedIncludes);
  };
  const handleexludesChange = (index, value) => {
    const updateexludes = [...excludes];
    updateexludes[index] = value;
    setExclues(updateexludes);
  };

  // Log all includes values in console
  const handleUpdateAll = () => {
    console.log("Updated Includes:", includes);
    console.log("Updated excludes:", excludes);

    const includes_excludes = {
      includes:includes,
      excludes:excludes
    }

  






  };


  console.log('single package', includes)
  console.log(Array.isArray(singlePackage.hotels));
  return (
    <div className="bg-gray-200 m-8 p-8">
      {/* Header Section */}
      <div className="flex items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src="/hands.png" alt="hands" width={42} height={42} />
      </div>
      <div className="flex items-center gap-1">
        <Link href="/admin/dashboard/create-packages">
          <span className="text-[30px] font-bold text-primary">
            <LeftOutlined />
          </span>
        </Link>
        <h1 className="text-[24px] font-Roboto font-bold text-primary">Edit Package</h1>
      </div>

      {/* Form Section */}
      <Form form={form} onFinish={handleSubmitPackage} layout="vertical">


        <div>
          {/* Country Select */}
          <Col>
            <Form.Item
              label="Select the destination"
              name="country_id"
            // rules={[{ message: "Please select a country!" }]}
            >
              <Select placeholder="Select a country">
                {countryData.map((country) => (
                  <Select.Option key={country.id} value={country.id}>
                    {country.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          {/* Title Field */}
          <Form.Item
            label="Package name"
            name="name"
            rules={[{ message: "Please enter the title!" }]}
          >
            <Input placeholder="Enter the country name" />
          </Form.Item>

          <Form.Item
            label="Upload Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: "Please upload an image!" }]}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              beforeUpload={handleBeforeUpload}
              onChange={handleImageChange}
              accept="image/*"
              maxCount={1} // Ensure only one image
            >
              {fileList.length < 1 && <Button icon={<UploadOutlined />}>Upload</Button>}
            </Upload>
          </Form.Item>
        </div>

        {/* Package Description */}
        <Form.Item label="Package description" name="description">
          <JoditEditor

            value={editorContent}

            onChange={(value) => {
              setEditorContent(value)
            }} // Trigger on change
          />
        </Form.Item>

        <Row gutter={16}>
          {/* Price */}
          <Col span={12}>
            <Form.Item
              label="Package Price"
              name="price"
              rules={[{ message: "Please enter the price!" }]}
            >
              <Input type="number" placeholder="Enter package price" />
            </Form.Item>
          </Col>

          {/* Days */}
          <Col span={12}>
            <Form.Item
              label="Number of Days"
              name="days"
              rules={[{ message: "Please enter the number of days!" }]}
            >
              <Input type="number" placeholder="Enter the number of days" />
            </Form.Item>
          </Col>
        </Row>


        {/* tab component here */}
        <div style={{ width: '100%' }}>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} style={{ backgroundColor: "transparent", padding: "8px" }}>
            <TabList >
              <Tab style={{ backgroundColor: "transparent", fontWeight: "700", color: '#4F4F4F' }}>INCLUDES & EXCLUDES</Tab>
              <Tab style={{ backgroundColor: "transparent", fontWeight: "700", color: '#4F4F4F' }}>HOTELS</Tab>
              <Tab style={{ backgroundColor: "transparent", fontWeight: "700", color: '#4F4F4F' }}>PRICE & VALIDITY</Tab>
              <Tab style={{ backgroundColor: "transparent", fontWeight: "700", color: '#4F4F4F' }}>ITINERARY</Tab>
            </TabList>


            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

                <div className="">



                  <div>
                    {includes.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between gap-3 lg:border-r border-[#D1D1D1] border-opacity-30 mb-2"
                      >
                        <input
                          style={{
                            height: "44px",
                            width: "100%",
                            backgroundColor: "white",
                            border: "1px solid #D1D1D1",
                          }}
                          type="text"
                          placeholder="Enter your includes text"
                          value={item}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                        />
                      </div>
                    ))}

                    {/* Update All Button */}
                
                  </div>

               
{/* 
                  <div className="mt-4 pr-4 space-y-2">

                    {items.map((item, index) => (
                      <div key={item.id} className="p-2 border-b text-[16px] bg-[#FFFFF0] ">
                        <span>{index + 1} .</span>  {item.text}
                      </div>
                    ))}

                    {
                        singlePackage.includes_excludes &&
                        singlePackage.includes_excludes.includes.map((item, index) => (
                          <div key={item.id} className="p-2 border-b text-[16px] bg-[#FFFFF0]">
                          <span>{index + 1} .</span>  {item}
                          </div>
                        ))
                      }
                  </div> */}

                </div>
                <div className="">
                 
                <div>
                    {excludes.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between gap-3 lg:border-r border-[#D1D1D1] border-opacity-30 mb-2"
                      >
                        <input
                          style={{
                            height: "44px",
                            width: "100%",
                            backgroundColor: "white",
                            border: "1px solid #D1D1D1",
                          }}
                          type="text"
                          placeholder="Enter your includes text"
                          value={item}
                          onChange={(e) => handleexludesChange(index, e.target.value)}
                          className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                        />
                      </div>
                    ))}

                
                  </div>

                
                </div>
                

              </div>
              <button
                    type="button"
                      onClick={handleUpdateAll}
                      className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg w-full h-[44px] text-[16px] font-semibold"
                    >
                      Update All
                    </button>
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
                      <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} name="city" placeholder="City" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                        ...hotelInfo,
                        city: e.target?.value
                      })} />
                    </div>
                    {/* Standard Hotel */}
                    <div>
                      <p>Standard Hotel</p>
                      <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} name="hotel" placeholder="Standard Hotel" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                        ...hotelInfo,
                        standard_hotel: e.target?.value
                      })} />
                    </div>
                    {/* Room Type One */}
                    <div>
                      <p>Room Type</p>
                      <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} name="roomTypeOne" placeholder="Room Type" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                        ...hotelInfo,
                        room_type: e.target?.value
                      })} />
                    </div>
                    {/* Supeior Hotel */}
                    <div>
                      <p>Supeior Hotel</p>
                      <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} name="supeior_hotel" placeholder="Supeior Hotel" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
                        ...hotelInfo,
                        supeior_hotel: e.target?.value
                      })} />
                    </div>
                    {/* Room Type Two */}
                    <div>
                      <p>Room Type</p>
                      <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} name="roomTypeTwo" placeholder="Room Type" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => setHotelInfo({
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
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="two" placeholder="2px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

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
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="four" placeholder="4px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

                          setPriceValidityInfo((prev) => {
                            const updatedStandard = [...prev.standard]; // Copy existing array
                            updatedStandard[1] = newValue; // Insert/Update at specific index

                            return {
                              ...prev,
                              standard: updatedStandard, // Update the 'standard' array
                            };
                          });
                        }} />
                      </div>
                      {/* 6px for */}
                      <div>
                        <p>6 Pax</p>
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="six" placeholder="6px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

                          setPriceValidityInfo((prev) => {
                            const updatedStandard = [...prev.standard]; // Copy existing array
                            updatedStandard[2] = newValue; // Insert/Update at specific index

                            return {
                              ...prev,
                              standard: updatedStandard, // Update the 'standard' array
                            };
                          });
                        }} />
                      </div>
                      {/* 8px for */}
                      <div>
                        <p>8 Pax</p>
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="eight" placeholder="8px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

                          setPriceValidityInfo((prev) => {
                            const updatedStandard = [...prev.standard]; // Copy existing array
                            updatedStandard[3] = newValue; // Insert/Update at specific index

                            return {
                              ...prev,
                              standard: updatedStandard, // Update the 'standard' array
                            };
                          });
                        }} />
                      </div>
                      {/* Single Supplement for */}
                      <div>
                        <p>Single Supplement</p>
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="single_supplement" placeholder="Single Supplement" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500"
                          onChange={(e) => {
                            const newValue = Number(e.target.value); // Convert input to number

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
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="two" placeholder="2px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

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
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="four" placeholder="4px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

                          setPriceValidityInfo((prev) => {
                            const updatedStandard = [...prev.superior]; // Copy existing array
                            updatedStandard[1] = newValue; // Insert/Update at specific index

                            return {
                              ...prev,
                              superior: updatedStandard, // Update the 'superior' array
                            };
                          });
                        }} />
                      </div>
                      {/* 6px for */}
                      <div>
                        <p>6 Pax</p>
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="six" placeholder="6px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

                          setPriceValidityInfo((prev) => {
                            const updatedStandard = [...prev.superior]; // Copy existing array
                            updatedStandard[2] = newValue; // Insert/Update at specific index

                            return {
                              ...prev,
                              superior: updatedStandard, // Update the 'superior' array
                            };
                          });
                        }} />
                      </div>
                      {/* 8px for */}
                      <div>
                        <p>8 Pax</p>
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="eight" placeholder="8px" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500" onChange={(e) => {
                          const newValue = Number(e.target.value); // Convert input to number

                          setPriceValidityInfo((prev) => {
                            const updatedStandard = [...prev.superior]; // Copy existing array
                            updatedStandard[3] = newValue; // Insert/Update at specific index

                            return {
                              ...prev,
                              superior: updatedStandard, // Update the 'superior' array
                            };
                          });
                        }} />
                      </div>
                      {/* Single Supplement for */}
                      <div>
                        <p>Single Supplement</p>
                        <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="single_supplement" placeholder="Single Supplement" className=" rounded px-2 py-1 outline-none bg-transparent border border-gray-500"
                          onChange={(e) => {
                            const newValue = Number(e.target.value); // Convert input to number

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
                      <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="text" name="lunchTime" placeholder="Itinerary name" className="border px-2 py-1 outline-none bg-transparent border-gray-500 rounded" onChange={(e) => setItineraryInfo({
                        ...itineraryInfo,
                        lunchTime: e.target?.value
                      })} />
                    </div>

                    {/* days */}
                    <div>
                      <p>Days</p>
                      <input style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} required type="number" name="days" placeholder="Days" className="border px-2 py-1 outline-none bg-transparent border-gray-500 rounded" onChange={(e) => setItineraryInfo({
                        ...itineraryInfo,
                        days: e.target?.value
                      })} />
                    </div>


                    {/* description */}
                    <div>
                      <p>Itinery Description</p>
                      <textarea style={{ width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }} name="description" placeholder="Enter Your Description...." rows={10} cols={60} className="border p-2 outline-none bg-transparent border-gray-500 rounded" onChange={(e) => setItineraryInfo({
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




        {/* Submit Button */}
        <Form.Item>
          <Button
            htmlType="submit"
            className="mt-10"
            style={{ backgroundColor: "#F49D2A", color: "white", border: "1px solid #F49D2A" }}
          >
            Update Package
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPackage;







