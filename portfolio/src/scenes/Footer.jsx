import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-auto bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="justify-center text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            McCray Austin
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2024 McCray Austin. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer