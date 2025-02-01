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

  const [allhotelInfo, setAllHotelInfo] = useState([]);
  const [hotelInfo, setHotelInfo] = useState();

  const [priceValidityInfo, setPriceValidityInfo] = useState({
    standard: [],
    superior: [],
  });
  const [allPriceValidityInfo, setAllPriceValidityInfo] = useState({
    standard: [0, 0, 0, 0, 0],  // Default values for standard prices
    superior: [0, 0, 0, 0, 0]   // Default values for superior prices
  });

  const [hotels, setHotels] = useState(singlePackage?.hotels || []);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({});



  const [allItinerary, setAllItinerary] = useState([])

  const [itineraryList, setItineraryList] = useState([]);
  const [editItnaryingIndex, setEdiItnarytingIndex] = useState(null);
  const [editedItinerary, setEditedItinerary] = useState({
      lunchTime: "",
      days: "",
      description: ""
  });






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

  const [itineraryInfo, setItineraryInfo] = useState({
    lunchTime: "",
    days: "",
    description: ""
  });

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



      formData.append('hotels', JSON.stringify(hotels))
      formData.append('price_validity', JSON.stringify(allPriceValidityInfo))
   

      formData.append('itinerary', JSON.stringify(itineraryList))

      // Log FormData for debugging
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

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
    if (singlePackage?.itinerary?.[0]) {
      setItineraryInfo({
        lunchTime: singlePackage.itinerary[0].lunchTime || "",
        days: singlePackage.itinerary[0].days || "",
        description: singlePackage.itinerary[0].description || ""
      });
    }
  }, [singlePackage]);


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
  useEffect(() => {
    if (singlePackage?.itinerary) {
      setItineraryList(singlePackage.itinerary);
    }
  }, [singlePackage]);


  const handleEditItnaryClick = (index) => {
    setEdiItnarytingIndex(index);
    setEditedItinerary({ ...itineraryList[index] });


  };
  console.log('itinerary',itineraryList);

  const handleItnaryChange = (e, field) => {
    setEditedItinerary({ ...editedItinerary, [field]: e.target.value });
  };


  const handleItnarySave = () => {
    const updatedItinerary = [...itineraryList];
    updatedItinerary[editItnaryingIndex] = editedItinerary;
    setItineraryList(updatedItinerary);
   
  };
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

  // console.log('itineraryList---', itineraryList);

  // Log all includes values in console



  // const handleSubmitHotel = (event) => {
  //   setAllHotelInfo(prev => {
  //     if (prev?.length) {
  //       return prev?.concat(hotelInfo)
  //     } else {
  //       return [hotelInfo]
  //     }
  //   })

  //   console.log('hotel info',allhotelInfo)

  // };




  const handleSubmitPriceValidity = () => {
    setAllPriceValidityInfo(priceValidityInfo)
    console.log('price validity', allPriceValidityInfo)
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
    
    
    
  };
  console.log('ITNARY',singlePackage?.itinerary)


  const standardPrice = singlePackage?.price_validity?.standard;
  const superiorPrice = singlePackage?.price_validity?.superior;
  useEffect(() => {
    if (standardPrice && superiorPrice) {
      setAllPriceValidityInfo({
        standard: standardPrice,
        superior: superiorPrice
      });
    }
  }, [standardPrice, superiorPrice]);


  useEffect(() => {
    if (singlePackage?.hotels) {
      setHotels(singlePackage.hotels);
    }
  }, [singlePackage]);

  console.log('single standard', standardPrice)
  console.log('single ', singlePackage)
  console.log('price and validity', singlePackage?.price_validity)
  console.log(Array.isArray(singlePackage.hotels));




  const handleEditClick = (index, e) => {
    e.preventDefault(); // Stop form from submitting
    setEditingIndex(index);
    setEditedData(hotels[index]); // Populate inputs with existing data
  };


  const handleChange = (e, field) => {
    setEditedData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };



  const handleSave = (e) => {
    e.preventDefault(); // Prevents full form submission

    if (editingIndex === null) return;

    const updatedHotels = [...hotels];
    updatedHotels[editingIndex] = { ...editedData };

    setHotels(updatedHotels);
    setEditingIndex(null);
    setEditedData({});

    console.log('updatedata', updatedHotels)

  };



  console.log("itineraryInfo", itineraryInfo)



  return (
    <div className="bg-gray-200 m-8 p-8">
      {/* Header Section */}

      <div className="flex items-center gap-1 mb-6">
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
              <Select style={{ height: '44px' }} placeholder="Select a country">
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
            <Input style={{ height: '44px' }} placeholder="Enter the country name" />
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
              <Input style={{ height: '44px' }} type="number" placeholder="Enter package price" />
            </Form.Item>
          </Col>

          {/* Days */}
          <Col span={12}>
            <Form.Item
              label="Number of Days"
              name="days"
              rules={[{ message: "Please enter the number of days!" }]}
            >
              <Input style={{ height: '44px' }} type="number" placeholder="Enter the number of days" />
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

            </TabPanel>

            {/* HOTELS tab  */}
            <TabPanel>
              <div className="p-4 bg-white rounded-sm">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">City</th>
                      <th className="border p-2">Standard Hotel</th>
                      <th className="border p-2">Room Type</th>
                      <th className="border p-2">Superior Hotel</th>
                      <th className="border p-2">Room Type</th>
                      <th className="border p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {hotels?.length === 0 && (
                      <tr>
                        <td colSpan="6" className="border p-2 text-center">
                          No data available
                        </td>
                      </tr>
                    )}

                    

                    {hotels?.length > 0 && hotels?.map((hotel, index) => (
                      <tr key={index} className="border">
                        {editingIndex === index ? (
                          <>
                            <td className="border p-2">
                              <input
                                type="text"
                                value={editedData?.city || ""}
                                onChange={(e) => handleChange(e, "city")}
                                className="border p-1"
                              />
                            </td>
                            <td className="border p-2">
                              <input
                                type="text"
                                value={editedData?.standard_hotel || ""}
                                onChange={(e) => handleChange(e, "standard_hotel")}
                                className="border p-1"
                              />
                            </td>
                            <td className="border p-2">
                              <input
                                type="text"
                                value={editedData?.room_type || ""}
                                onChange={(e) => handleChange(e, "room_type")}
                                className="border p-1"
                              />
                            </td>
                            <td className="border p-2">
                              <input
                                type="text"
                                value={editedData?.supeior_hotel || ""}
                                onChange={(e) => handleChange(e, "supeior_hotel")}
                                className="border p-1"
                              />
                            </td>
                            <td className="border p-2">
                              <input
                                type="text"
                                value={editedData?.room_type1 || ""}
                                onChange={(e) => handleChange(e, "room_type1")}
                                className="border p-1"
                              />
                            </td>
                            <td className="border p-2">
                              <button
                                type="submit"
                                onClick={handleSave}
                                className="bg-green-500 text-white px-2 py-1 rounded"
                              >
                                Save
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="border p-2">{hotel?.city}</td>
                            <td className="border p-2">{hotel?.standard_hotel}</td>
                            <td className="border p-2">{hotel?.room_type}</td>
                            <td className="border p-2">{hotel?.supeior_hotel}</td>
                            <td className="border p-2">{hotel?.room_type1}</td>
                            <td className="border p-2">
                              <button
                                type="button" // Prevents form submission
                                onClick={(e) => handleEditClick(index, e)}
                                className="bg-primary text-white px-2 py-1 rounded"
                              >
                                Edit
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* price and validity */}
            <TabPanel>
              <div className="flex flex-col rounded-md">
                <div className="flex justify-between">
                  {/* Tab-panel one for standard prices */}
                  <div className="p-4 w-1/2">
                    <h1 className="text-xl font-bold font-Roboto text-primary py-2">Standard</h1>
                    <div className="space-y-4">
                      {['2 Pax', '4 Pax', '6 Pax', '8 Pax', 'Single Supplement'].map((label, index) => (
                        <div key={index}>
                          <p>{label}</p>
                          <input
                            value={allPriceValidityInfo.standard[index] || ''}
                            style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }}
                            required
                            type="number"
                            name={label.toLowerCase().replace(' ', '_')}
                            placeholder={label}
                            className="rounded px-2 py-1 outline-none bg-transparent border border-gray-500"
                            onChange={(e) => {
                              const newValue = Number(e.target.value);
                              setAllPriceValidityInfo((prev) => {
                                const updatedStandard = [...prev.standard];
                                updatedStandard[index] = newValue;
                                return { ...prev, standard: updatedStandard };
                              });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tab-panel two for superior prices */}
                  <div className="p-4 w-1/2">
                    <h1 className="text-xl font-bold font-Roboto text-primary py-2">Superior</h1>
                    <div className="space-y-4">
                      {['2 Pax', '4 Pax', '6 Pax', '8 Pax', 'Single Supplement'].map((label, index) => (
                        <div key={index}>
                          <p>{label}</p>
                          <input
                            value={allPriceValidityInfo.superior[index] || ''}
                            style={{ height: '44px', width: '100%', backgroundColor: 'white', border: '1px solid #D1D1D1' }}
                            required
                            type="number"
                            name={label.toLowerCase().replace(' ', '_')}
                            placeholder={label}
                            className="rounded px-2 py-1 outline-none bg-transparent border border-gray-500"
                            onChange={(e) => {
                              const newValue = Number(e.target.value);
                              setAllPriceValidityInfo((prev) => {
                                const updatedSuperior = [...prev.superior];
                                updatedSuperior[index] = newValue;
                                return { ...prev, superior: updatedSuperior };
                              });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Save button */}
                {/* <div className="pl-4 py-8">
                  <button onClick={() => handleSubmitPriceValidity()} type="button" className="bg-gray-500 text-white px-6 py-1 rounded">Save Validity</button>
                </div> */}
              </div>



            </TabPanel>

            {/* Itinerary */}
            <TabPanel>
            <div className="p-4 bg-white rounded-sm">
      <h1 className="text-xl font-bold font-Roboto text-primary py-2">
        ITINERARY
      </h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Lunch Time</th>
            <th className="border p-2">Days</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {itineraryList.length === 0 && (
            <tr>
              <td colSpan="4" className="border p-2 text-center">
                No data available
              </td>
            </tr>
          )}

          {itineraryList.length > 0 &&
            itineraryList.map((item, index) => (
              <tr key={index} className="border">
                {editItnaryingIndex === index ? (
                  <>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={editedItinerary?.lunchTime || ""}
                        onChange={(e) => handleItnaryChange(e, "lunchTime")}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        value={editedItinerary?.days || ""}
                        onChange={(e) => handleItnaryChange(e, "days")}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="border p-2">
                      <textarea
                        value={editedItinerary?.description || ""}
                        onChange={(e) => handleItnaryChange(e, "description")}
                        className="border p-1 w-full"
                        rows={4}
                      />
                    </td>
                    <td className="border p-2">
                      <button
                        type="button"
                        onClick={handleItnarySave}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border p-2">{item.lunchTime}</td>
                    <td className="border p-2">{item.days}</td>
                    <td className="border p-2">{item.description}</td>
                    <td className="border p-2">
                      <button
                        type="button"
                        onClick={() => handleEditItnaryClick(index)}
                        className="bg-primary text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
            </TabPanel>
          </Tabs>
        </div>




        {/* Submit Button */}
        <Form.Item>
          <Button
            htmlType="submit"
            className="mt-10"
            style={{ backgroundColor: "#F49D2A", color: "white", border: "1px solid #F49D2A", width: '100%', height: '44px', fontSize: '16px', fontWeight: '500' }}
          >
            Update Package
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPackage;







