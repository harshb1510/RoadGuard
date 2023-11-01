import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex items-center justify-around py-10 px-4 lg:px-24">
        <div className="w-1/3">
          <h5 className="text-3xl font-bold mb-2">RoadGuard</h5>
          <p className="text-sm text-gray-600">
            © 2023 RoadGuard. All rights reserved
          </p>
          <div className="flex items-center mt-4">
            <TwitterIcon className="text-blue-400 text-3xl mr-2" />
            <FacebookIcon className="text-blue-700 text-3xl mr-2" />
            <InstagramIcon className="text-red-500 text-3xl" />
          </div>
        </div>
        <div className="w-1/3">
          <h6 className="text-lg font-bold mb-4">Organisation</h6>
          <div className="grid text-sm text-gray-600 space-y-2">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Pricing</span>
            <span>Terms of Service</span>
          </div>
        </div>
        <div className="w-1/3">
          <h5 className="text-lg font-bold mb-2">Stay Up to Date</h5>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="border rounded-lg border-gray-400 text-sm py-1 px-2 mr-2"
            />
            <button className="border rounded-lg bg-green-300 text-white py-1 px-4">
              <EmailIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;