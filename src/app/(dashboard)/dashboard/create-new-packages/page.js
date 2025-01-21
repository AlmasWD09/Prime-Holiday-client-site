'use client';


import { Select, Input, Button, Form, Upload } from "antd";
import { LeftOutlined } from "@ant-design/icons"
import Image from "next/image"
import TextEditor from "@/app/components/textEditor/TextEditor";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";


const CreateNewPage = () => {

  const [loading,setLoading] = useState(true);

  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");
  const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES")

  const [inputValue, setInputValue] = useState(""); // For tracking the input field value
  const [inputValueExcludes, setInputValueExcludes] = useState("");
  const [itemsExcludes, setItemsExcludes] = useState([]);
  const [items, setItems] = useState([]); // For storing the array of objects
  const [countryData, setCountryData] = useState([])
  const [imageData, setImageData] = useState(null)

  // Fetch contient data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://10.0.80.13:8000/api/admin/country');
      const result = await response.json();
      setCountryData(result.countries);
    };

    fetchData();
  }, []);

   useEffect(()=>{
      setLoading(false)
   },[])



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

  // Handle form submission
  const handleSubmit = async (values) => {
    const updatedValues = {
      ...values,
      description: editorContent,
    };

    console.log(values,updatedValues)

    const imageFile = values.image[0].originFileObj;
    if (!imageFile) {
      console.error("Image file is required.");
      return;
    }

    setImageData(imageFile)
    form.resetFields()

    // localStorage.setItem('packegeDetails', JSON.stringify(values))
  };


  // const packegeDetails = localStorage.getItem('packegeDetails')
  // const hotelDetails = localStorage.getItem('hotelDetails')
  // const priceValidityDetails = localStorage.getItem('priceValidityDetails')
  // const initeryDetails = localStorage.getItem('initeryDetails')


  // all data parse in localStorage
  // const packageData = JSON.parse(packegeDetails)
  // const hotelData = JSON.parse(hotelDetails)
  // const priceValidityData = JSON.parse(priceValidityDetails)
  // const initeryData = JSON.parse(initeryDetails)

  // const countryId = countryData.map((item) => item.id)
  // const countryName = countryData.map((item) => item.name)


  // const allData = {
  //   name: 'country name',
    
  //   country_id: "20",
  //   image: imageData,
  //   // image: "The image field must be an image/ The image field must be a file of type: jpeg, png, jpg.",
  //   days: packageData?.days,
  //   description: 'ddddddddddddddddddddddddddddddd',
  //   // price: packageData?.price,
  //   price: '22',
  //   title: packageData?.title,
  //   city: hotelData?.city,
  //   hotel: hotelData?.hotel,
  //   roomTypeOne: hotelData?.roomTypeOne,
  //   roomTypeTwo: hotelData?.roomTypeTwo,
  //   supeiorHotel: hotelData?.supeiorHotel,
  //   eight: priceValidityData?.eight,
  //   singleSupplement: priceValidityData?.singleSupplement,
  //   // days: initeryData?.days,
  //   days: '2', // integer number dao
  //   lunchTime: initeryData?.lunchTime,
  // }


  const handleSubmitPublishedPackege = async () => {
    try {
      const response = await axios.post("http://10.0.80.13:8000/api/admin/destination/store", allData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  }

  if(loading){
    return <div>Loading</div>
  }

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
              rules={[{ required: true, message: "Please select a continent!" }]}
            >
              <Select placeholder="Enter the contry name" className="max-w-xl">
                {countryData.map((singleCountry, index) => (
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
              rules={[{ required: true, message: "Please upload an image!" }]}
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
            <TextEditor onchange={setEditorContent} />
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

          {/* **** tab button *** */}
          <section>
            <div className="p-6 border border-[#B0B0B0] border-opacity-20 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  border-gray-300 pb-6">
                <button className="py-3 text-center font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] ">INCLUDES & EXCLUDES</button>
                <Link href={'/dashboard/hotal-package'} className="py-3 text-center text-black font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] "><button >HOTELS</button></Link>
                <Link href={'/dashboard/price-validity'} className="py-3 text-center text-black font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] "><button >PRICE & VALIDITY</button></Link>
                <Link href={'/dashboard/itinery'} className="py-3 text-center text-black font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] "><button >ITINERARY</button></Link>
              </div>

              {/* =============== INCLUDES & EXCLUDES Tab start =========================== */}
              {
                buttonText === "INCLUDES & EXCLUDES" && <div>
                  <div className="flex justify-evenly bg-[#135029] py-4">
                    <h3 className=" font-bold text-[#FFFFFF]">Includes</h3>
                    <h3 className=" font-bold text-[#FFFFFF]">Excludes</h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                    {/* Includes Section */}
                    <div className="p-4">
                      <div className="flex justify-between lg:border-r border-[#D1D1D1] border-opacity-30">
                        <input
                          type="text"
                          placeholder="Enter your text"
                          value={inputValue} // Bind input value to state
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

                      {/* Display the items */}
                      <div className="mt-4">
                        {items.map((item, index) => (
                          <div key={item.id} className="p-2 border-b">
                            {index + 1}. {item.text}
                          </div>
                        ))}
                      </div>

                    </div>


                    {/* Excludes Section */}
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
                      {/* Display the items */}
                      <div className="mt-4">
                        {itemsExcludes.map((item, index) => (
                          <div key={item.id} className="p-2 border-b">
                            {index + 1}. {item.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              }
              {/* =============== INCLUDES & EXCLUDES Tab end ============================= */}
            </div>
          </section>
          {/* save button */}
          <div className="py-4">
            <button type="submit" className="bg-primary text-white px-10 rounded py-1">Save</button>
          </div>
        </Form>
      </div>


    
      <div className="flex justify-center py-4">
        <button
          onClick={() => handleSubmitPublishedPackege()}
          className="bg-primary/85 hover:bg-primary text-white font-semibold px-8 py-2 rounded">Published Packege</button>
      </div>
    </div>
  )
}

export default CreateNewPage;
