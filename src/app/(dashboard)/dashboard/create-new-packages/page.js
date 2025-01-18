'use client'


import { Select, Input, Button, Form, Upload } from "antd";
import { LeftOutlined } from "@ant-design/icons"
import Image from "next/image"
import TextEditor from "@/app/components/textEditor/TextEditor";
import { useState } from "react";


const CreateNewPage = () => {
  const countries = ["Asia", "Africa", "North America", "Antarctica", "Antarctica", "Europe", "Oceania"]

  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");
  const [buttonColor, setButtonColor] = useState(0);
  const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES")



  const [inputValue, setInputValue] = useState(""); // For tracking the input field value
  const [inputValueExcludes, setInputValueExcludes] = useState("");
  const [itemsExcludes, setItemsExcludes] = useState([]);
  const [items, setItems] = useState([]); // For storing the array of objects

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

console.log(items)
console.log(itemsExcludes)

  // Handle form submission
  const handleSubmit = async (values) => {
    const updatedValues = {
      ...values,
      description: editorContent,
    };


    const imageFile = values.image[0].originFileObj;
    if (!imageFile) {
      console.error("Image file is required.");
      return;
    }

    const formData = new FormData();
    formData.append("country_id", "4"); // Hardcoded country_id
    formData.append("name", values.name);
    formData.append("days", values.days);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("image", imageFile);

    form.resetFields();
  };

  // single button text get
  const handleButtonClick = (event, index) => {
    const buttonText = event.target.innerText;
    setButtonText(buttonText)
    setButtonColor(index);
  };

  return (
    <div className="bg-gray-200 m-8 p-8 ">
      <div className="flex  items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[30px] font-bold text-primary"><LeftOutlined /></span>
        <h1 className='text-[24px] font-Roboto font-bold text-primary'>Create New Packages</h1>
      </div>

      {/* form here */}
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {/* select  */}
        <div className="mb-2">
          <p>Select the continent</p>
          <Form.Item
            name="continent"
            rules={[{ required: true, message: "Please select a continent!" }]}
          >
            <Select placeholder="Enter the country name" className="max-w-xl">
              {countries.map((country, index) => (
                <Select.Option key={index} value={country}>
                  {country}
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



        {/* ************ */}
        <section className=" pt-[56px]">
          <div className="p-6 border border-[#B0B0B0] border-opacity-20 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  border-gray-300 pb-6">
              {["INCLUDES & EXCLUDES", "HOTELS", "PRICE & VALIDITY", "ITINERARY"].map((label, index) => (
                <button
                  key={index}
                  onClick={(event) => handleButtonClick(event, index)}
                  className={`py-3 text-center font-bold border border-[#135029] rounded-xl text-[#135029] border-opacity-30 ${buttonColor === index ? "bg-[#135029] text-[#FFFFF0] " : ""
                    }`}
                >
                  {label}
                </button>
              ))}
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
                        onClick={handleAdd}
                        className="border border-primary hover:bg-primary hover:text-white px-4 py-1 mr-4 rounded-lg"
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
                        onClick={handleAddTwo}
                        className="border border-primary hover:bg-primary hover:text-white px-4 py-1 mr-4 rounded-lg">
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
        {/* ************ */}


        <div className="py-8">
          <button type="submit" className="bg-primary text-white px-6 py-1">Save</button>
        </div>
      </Form>
    </div>
  )
}

export default CreateNewPage;
