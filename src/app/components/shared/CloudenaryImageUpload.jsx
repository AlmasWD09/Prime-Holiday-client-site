"use client"
import { CldUploadWidget } from 'next-cloudinary';

const CloudenaryImageUpload = ({ setHostedUrl }) => {
    return (
        <>
            <CldUploadWidget uploadPreset="cloudenary-yt" onSuccess={(result) => setHostedUrl(result?.info?.url)}>
                {({ open }) => {
                    return (
                        <button onClick={() => open()} className="bg-green-500 px-4 py-2">
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>
        </>
    )
}

export default CloudenaryImageUpload