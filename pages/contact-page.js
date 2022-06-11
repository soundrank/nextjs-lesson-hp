import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-gray-50 text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold mb-5">Contact info</p>
          <p>good markだけじゃいい作品は作れない</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rouded-full"
            src="/avatar.png"
            width={60}
            height={60}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold mb-5">私たちのFu*k Signには愛があります</p>
        </div>
        <div className="mt-6 flex justify-around">
          <a href=""></a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
