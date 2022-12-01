import "./Style.css";

export default function Scrollspy() {
  return (
    <>
      <nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-light p-3 rounded-2"
        tabindex="0"
      >
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sodales aliquam tellus, at commodo est euismod eget. Nam arcu sapien,
          lacinia ut elit ac, porta euismod lacus. Cras accumsan purus sed
          commodo tristique. Mauris scelerisque vestibulum eros id consequat. In
          odio odio, interdum fringilla magna sed, maximus congue odio. In ut
          iaculis massa. Etiam nunc metus, semper a ex eget, egestas condimentum
          tortor. Fusce mollis, lacus eget iaculis ultricies, erat mi eleifend
          risus, iaculis efficitur ligula mauris quis turpis. Quisque imperdiet,
          tortor at feugiat lobortis, nisi eros imperdiet mauris, nec congue
          diam tellus vitae risus. Cras sed sollicitudin sapien. Maecenas
          ultrices, velit sed dignissim ullamcorper, libero odio porta mauris,
          at pretium nibh urna at nibh. Praesent vitae odio erat. Proin odio ex,
          ornare quis augue in, cursus mattis urna. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Nulla
          facilisi. Praesent rutrum metus a lobortis sagittis. Donec sit amet
          sapien porta, blandit nunc vitae, maximus tellus. Suspendisse potenti.
          In eleifend gravida est, at tempor nunc blandit vel. Nulla lacus est,
          accumsan a consectetur quis, varius mattis nibh. Curabitur ut risus
          ex. Integer accumsan finibus lobortis. Praesent sed magna tempus,
          ultrices justo sed, imperdiet libero. Mauris sit amet lacinia eros.
          Integer dictum nibh eu tempus rutrum. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          quis purus id dui auctor tristique in non nisl. Maecenas dictum
          sollicitudin pretium. Vestibulum auctor ac enim a ornare. Curabitur
          vulputate tortor in viverra porttitor. Cras ultricies velit vulputate
          ornare vulputate. Curabitur suscipit luctus erat, vel maximus quam
          aliquam id. Mauris ultricies hendrerit magna sit amet pharetra. Nam
          sapien risus, faucibus sed urna non, lacinia laoreet sapien. Mauris
          nec dolor magna. Donec vel libero ut ipsum volutpat sodales. Ut eu
          tincidunt metus. Nulla facilisi. In lacus tellus, egestas efficitur
          accumsan ac, ullamcorper eu quam. Nullam dignissim leo sit amet
          lacinia pellentesque. In lacinia laoreet odio, sed tincidunt eros
          imperdiet eu. Fusce non dolor vitae diam feugiat dapibus. Nulla
          bibendum a lectus vel cursus. Ut pulvinar interdum laoreet.{" "}
        </p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sodales aliquam tellus, at commodo est euismod eget. Nam arcu sapien,
          lacinia ut elit ac, porta euismod lacus. Cras accumsan purus sed
          commodo tristique. Mauris scelerisque vestibulum eros id consequat. In
          odio odio, interdum fringilla magna sed, maximus congue odio. In ut
          iaculis massa. Etiam nunc metus, semper a ex eget, egestas condimentum
          tortor. Fusce mollis, lacus eget iaculis ultricies, erat mi eleifend
          risus, iaculis efficitur ligula mauris quis turpis. Quisque imperdiet,
          tortor at feugiat lobortis, nisi eros imperdiet mauris, nec congue
          diam tellus vitae risus. Cras sed sollicitudin sapien. Maecenas
          ultrices, velit sed dignissim ullamcorper, libero odio porta mauris,
          at pretium nibh urna at nibh. Praesent vitae odio erat. Proin odio ex,
          ornare quis augue in, cursus mattis urna. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Nulla
          facilisi. Praesent rutrum metus a lobortis sagittis. Donec sit amet
          sapien porta, blandit nunc vitae, maximus tellus. Suspendisse potenti.
          In eleifend gravida est, at tempor nunc blandit vel. Nulla lacus est,
          accumsan a consectetur quis, varius mattis nibh. Curabitur ut risus
          ex. Integer accumsan finibus lobortis. Praesent sed magna tempus,
          ultrices justo sed, imperdiet libero. Mauris sit amet lacinia eros.
          Integer dictum nibh eu tempus rutrum. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          quis purus id dui auctor tristique in non nisl. Maecenas dictum
          sollicitudin pretium. Vestibulum auctor ac enim a ornare. Curabitur
          vulputate tortor in viverra porttitor. Cras ultricies velit vulputate
          ornare vulputate. Curabitur suscipit luctus erat, vel maximus quam
          aliquam id. Mauris ultricies hendrerit magna sit amet pharetra. Nam
          sapien risus, faucibus sed urna non, lacinia laoreet sapien. Mauris
          nec dolor magna. Donec vel libero ut ipsum volutpat sodales. Ut eu
          tincidunt metus. Nulla facilisi. In lacus tellus, egestas efficitur
          accumsan ac, ullamcorper eu quam. Nullam dignissim leo sit amet
          lacinia pellentesque. In lacinia laoreet odio, sed tincidunt eros
          imperdiet eu. Fusce non dolor vitae diam feugiat dapibus. Nulla
          bibendum a lectus vel cursus. Ut pulvinar interdum laoreet.{" "}
        </p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sodales aliquam tellus, at commodo est euismod eget. Nam arcu sapien,
          lacinia ut elit ac, porta euismod lacus. Cras accumsan purus sed
          commodo tristique. Mauris scelerisque vestibulum eros id consequat. In
          odio odio, interdum fringilla magna sed, maximus congue odio. In ut
          iaculis massa. Etiam nunc metus, semper a ex eget, egestas condimentum
          tortor. Fusce mollis, lacus eget iaculis ultricies, erat mi eleifend
          risus, iaculis efficitur ligula mauris quis turpis. Quisque imperdiet,
          tortor at feugiat lobortis, nisi eros imperdiet mauris, nec congue
          diam tellus vitae risus. Cras sed sollicitudin sapien. Maecenas
          ultrices, velit sed dignissim ullamcorper, libero odio porta mauris,
          at pretium nibh urna at nibh. Praesent vitae odio erat. Proin odio ex,
          ornare quis augue in, cursus mattis urna. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Nulla
          facilisi. Praesent rutrum metus a lobortis sagittis. Donec sit amet
          sapien porta, blandit nunc vitae, maximus tellus. Suspendisse potenti.
          In eleifend gravida est, at tempor nunc blandit vel. Nulla lacus est,
          accumsan a consectetur quis, varius mattis nibh. Curabitur ut risus
          ex. Integer accumsan finibus lobortis. Praesent sed magna tempus,
          ultrices justo sed, imperdiet libero. Mauris sit amet lacinia eros.
          Integer dictum nibh eu tempus rutrum. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          quis purus id dui auctor tristique in non nisl. Maecenas dictum
          sollicitudin pretium. Vestibulum auctor ac enim a ornare. Curabitur
          vulputate tortor in viverra porttitor. Cras ultricies velit vulputate
          ornare vulputate. Curabitur suscipit luctus erat, vel maximus quam
          aliquam id. Mauris ultricies hendrerit magna sit amet pharetra. Nam
          sapien risus, faucibus sed urna non, lacinia laoreet sapien. Mauris
          nec dolor magna. Donec vel libero ut ipsum volutpat sodales. Ut eu
          tincidunt metus. Nulla facilisi. In lacus tellus, egestas efficitur
          accumsan ac, ullamcorper eu quam. Nullam dignissim leo sit amet
          lacinia pellentesque. In lacinia laoreet odio, sed tincidunt eros
          imperdiet eu. Fusce non dolor vitae diam feugiat dapibus. Nulla
          bibendum a lectus vel cursus. Ut pulvinar interdum laoreet.{" "}
        </p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sodales aliquam tellus, at commodo est euismod eget. Nam arcu sapien,
          lacinia ut elit ac, porta euismod lacus. Cras accumsan purus sed
          commodo tristique. Mauris scelerisque vestibulum eros id consequat. In
          odio odio, interdum fringilla magna sed, maximus congue odio. In ut
          iaculis massa. Etiam nunc metus, semper a ex eget, egestas condimentum
          tortor. Fusce mollis, lacus eget iaculis ultricies, erat mi eleifend
          risus, iaculis efficitur ligula mauris quis turpis. Quisque imperdiet,
          tortor at feugiat lobortis, nisi eros imperdiet mauris, nec congue
          diam tellus vitae risus. Cras sed sollicitudin sapien. Maecenas
          ultrices, velit sed dignissim ullamcorper, libero odio porta mauris,
          at pretium nibh urna at nibh. Praesent vitae odio erat. Proin odio ex,
          ornare quis augue in, cursus mattis urna. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Nulla
          facilisi. Praesent rutrum metus a lobortis sagittis. Donec sit amet
          sapien porta, blandit nunc vitae, maximus tellus. Suspendisse potenti.
          In eleifend gravida est, at tempor nunc blandit vel. Nulla lacus est,
          accumsan a consectetur quis, varius mattis nibh. Curabitur ut risus
          ex. Integer accumsan finibus lobortis. Praesent sed magna tempus,
          ultrices justo sed, imperdiet libero. Mauris sit amet lacinia eros.
          Integer dictum nibh eu tempus rutrum. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          quis purus id dui auctor tristique in non nisl. Maecenas dictum
          sollicitudin pretium. Vestibulum auctor ac enim a ornare. Curabitur
          vulputate tortor in viverra porttitor. Cras ultricies velit vulputate
          ornare vulputate. Curabitur suscipit luctus erat, vel maximus quam
          aliquam id. Mauris ultricies hendrerit magna sit amet pharetra. Nam
          sapien risus, faucibus sed urna non, lacinia laoreet sapien. Mauris
          nec dolor magna. Donec vel libero ut ipsum volutpat sodales. Ut eu
          tincidunt metus. Nulla facilisi. In lacus tellus, egestas efficitur
          accumsan ac, ullamcorper eu quam. Nullam dignissim leo sit amet
          lacinia pellentesque. In lacinia laoreet odio, sed tincidunt eros
          imperdiet eu. Fusce non dolor vitae diam feugiat dapibus. Nulla
          bibendum a lectus vel cursus. Ut pulvinar interdum laoreet.{" "}
        </p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sodales aliquam tellus, at commodo est euismod eget. Nam arcu sapien,
          lacinia ut elit ac, porta euismod lacus. Cras accumsan purus sed
          commodo tristique. Mauris scelerisque vestibulum eros id consequat. In
          odio odio, interdum fringilla magna sed, maximus congue odio. In ut
          iaculis massa. Etiam nunc metus, semper a ex eget, egestas condimentum
          tortor. Fusce mollis, lacus eget iaculis ultricies, erat mi eleifend
          risus, iaculis efficitur ligula mauris quis turpis. Quisque imperdiet,
          tortor at feugiat lobortis, nisi eros imperdiet mauris, nec congue
          diam tellus vitae risus. Cras sed sollicitudin sapien. Maecenas
          ultrices, velit sed dignissim ullamcorper, libero odio porta mauris,
          at pretium nibh urna at nibh. Praesent vitae odio erat. Proin odio ex,
          ornare quis augue in, cursus mattis urna. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Nulla
          facilisi. Praesent rutrum metus a lobortis sagittis. Donec sit amet
          sapien porta, blandit nunc vitae, maximus tellus. Suspendisse potenti.
          In eleifend gravida est, at tempor nunc blandit vel. Nulla lacus est,
          accumsan a consectetur quis, varius mattis nibh. Curabitur ut risus
          ex. Integer accumsan finibus lobortis. Praesent sed magna tempus,
          ultrices justo sed, imperdiet libero. Mauris sit amet lacinia eros.
          Integer dictum nibh eu tempus rutrum. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          quis purus id dui auctor tristique in non nisl. Maecenas dictum
          sollicitudin pretium. Vestibulum auctor ac enim a ornare. Curabitur
          vulputate tortor in viverra porttitor. Cras ultricies velit vulputate
          ornare vulputate. Curabitur suscipit luctus erat, vel maximus quam
          aliquam id. Mauris ultricies hendrerit magna sit amet pharetra. Nam
          sapien risus, faucibus sed urna non, lacinia laoreet sapien. Mauris
          nec dolor magna. Donec vel libero ut ipsum volutpat sodales. Ut eu
          tincidunt metus. Nulla facilisi. In lacus tellus, egestas efficitur
          accumsan ac, ullamcorper eu quam. Nullam dignissim leo sit amet
          lacinia pellentesque. In lacinia laoreet odio, sed tincidunt eros
          imperdiet eu. Fusce non dolor vitae diam feugiat dapibus. Nulla
          bibendum a lectus vel cursus. Ut pulvinar interdum laoreet.{" "}
        </p>
      </div>
    </>
  );
}
