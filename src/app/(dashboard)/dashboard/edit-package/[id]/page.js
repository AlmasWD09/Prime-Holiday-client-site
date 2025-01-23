"use client"

// import TextEditor from "@/app/components/textEditor/TextEditor";
import { LeftOutlined } from "@ant-design/icons";
import { Select, Input, Button, Form, Upload } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";


const EditPackage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [singlePackege, setSinglePackege] = useState([])
  const [editorContent, setEditorContent] = useState("");
  const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES")

  const [inputValue, setInputValue] = useState(""); // For tracking the input field value
  const [inputValueExcludes, setInputValueExcludes] = useState("");
  const [itemsExcludes, setItemsExcludes] = useState([]);
  const [items, setItems] = useState([]); // For storing the array of objects
  const [countryData, setCountryData] = useState([])
  const [imageData, setImageData] = useState(null)

  useEffect(() => {
    const fetchSingleData = async () => {
      const response = await fetch(
        `http://10.0.80.13:8000/api/admin/destination/${id}`
      );
      const result = await response.json();
      setSinglePackege(result.destination)
      // setSingleContentData(result.country); 
      // setSelectedContinent(result.country?.continentId || null); 


      console.log(singlePackege)
      // Set default values in the form
      // form.setFieldsValue({
      //   continent: result.country?.continentId,
      //   countryName: result.country?.name,
      //   title: result.country?.title,
      // });

      // Set default image if available
      // if (result.country?.image) {
      //   setFileList([
      //     {
      //       uid: "-1",
      //       name: "image.png",
      //       status: "done",
      //       url: result.country.image, // Image URL from server
      //     },
      //   ]);
      // }
    };

    fetchSingleData();
  }, [id,]);
  // }, [id, form]);

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
    console.log('click hoica')
  
  };



  return (
    <div className="bg-gray-200 m-8 p-8 ">
      <div className="flex  items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
      </div>
      <div className="flex items-center gap-1">
        <a href="/dashboard/create-packages"><span className="text-[30px] font-bold text-primary"><LeftOutlined /></span></a>
        <h1 className='text-[24px] font-Roboto font-bold text-primary'>Edit Package</h1>
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
            <Select placeholder="Enter the contry name" className="max-w-xl">
              {/* {countryData.map((singleCountry, index) => (
                <Select.Option key={index} value={singleCountry.id}>
                  {singleCountry.name}
                </Select.Option>
              ))} */}
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
            <Upload 
            beforeUpload={() => false} listType="picture">
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
          {/* <TextEditor onchange={setEditorContent} /> */}
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
      </Form>
    </div>
  )
}

export default EditPackage;
