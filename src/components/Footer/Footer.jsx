const Footer = () => {
  return (
    <footer className="footer bg-[#1A1919] text-[white] p-10 py-32">
      <aside>
        <h1 className="text-5xl font-black italic">CareerHub</h1>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <img src="/src/assets/icons/social.png" className="mt-6" alt="" />
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contacts</h6>
        <a className="link link-hover">524 Broadway , NYC</a>
        <a className="link link-hover">+1 777 - 978 - 5570</a>
      </nav>
    </footer>
  );
};

export default Footer;
