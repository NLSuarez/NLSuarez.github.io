'use strict'; //react and projects
//Projects
//Defined outside to keep them organized. Would normally store as json, but no need right now.

const currentProjects = [{
  key: 0,
  name: "Revaliir",
  description: "A medium sized, forum website serving a dedicated, writing community. </br><strong>Live technology stack:</strong> Django 1.8, python 2.7, jquery, and Bootstrap. </br><strong>In development technology stack:</strong> React.js, Redux, Django 3.2+, Python 3.7+ and Dart scss. Various other libraries used.",
  projectImg: "./media/images/Revaliir.PNG",
  githubLink: "",
  websiteLink: "https://worldofrevaliir.net/index/"
}, {
  key: 1,
  name: "Pomodoro Clock",
  description: "An alternating clock to help users keep track of taking regular breaks. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap.",
  projectImg: "./media/images/PomodoroClock.PNG",
  githubLink: "",
  codepenLink: "https://codepen.io/CodeAni/pen/Zjojdr",
  websiteLink: "https://codepen.io/CodeAni/full/Zjojdr/"
}, {
  key: 2,
  name: "React Calculator",
  description: "A simple calculator built using React. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap.",
  projectImg: "./media/images/ReactCalculator.PNG",
  githubLink: "",
  codepenLink: "https://codepen.io/CodeAni/pen/JBNjYr",
  websiteLink: "https://codepen.io/CodeAni/full/JBNjYr/"
}, {
  key: 3,
  name: "Drum Machine",
  description: "A 'drum machine' that allows the user to play 9 different notes from a piano by either clicking buttons or utilizing the keyboard. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap",
  projectImg: "./media/images/DrumMachine.PNG",
  githubLink: "",
  codepenLink: "https://codepen.io/CodeAni/pen/RBPmLV",
  websiteLink: "https://codepen.io/CodeAni/full/RBPmLV"
}, {
  key: 4,
  name: "Markdown Previewer",
  description: "A markdown previewer that was originally an alpha for a custom markdown editor. It reads markdown syntax in a textbox and renders it as regular html. The project is now archived because the idea was eventually dropped in favor of a WYSIWYG editor. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap, Markdown.js",
  projectImg: "./media/images/MarkdownPreviewer.PNG",
  githubLink: "",
  codepenLink: "https://codepen.io/CodeAni/pen/OwPqoJ",
  websiteLink: "https://codepen.io/CodeAni/full/OwPqoJ"
}, {
  key: 5,
  name: "Random Quote Machine",
  description: "A very simple react project that uses fetch to acquire a json object of quotes and then choses one at random that is appropriate for twitter. </br><strong>Technology stack:</strong> ES6, React.js, SCSS, Bootstrap, Fetch.js",
  projectImg: "./media/images/RandomQuote.PNG",
  githubLink: "",
  codepenLink: "https://codepen.io/CodeAni/pen/RBbNKg",
  websiteLink: "https://codepen.io/CodeAni/full/RBbNKg"
}, {
  key: 6,
  name: "Spanish Frequency Analyzer",
  description: "A desktop application built for a high school Spanish teacher to help determine the frequency at which words appear in lecture notes. </br><strong>Technology stack:</strong> C# and WPF.",
  projectImg: "./media/images/spanishFrequency.PNG",
  githubLink: "https://github.com/NLSuarez/spanish-nl-analyzer",
  codepenLink: "",
  websiteLink: ""
}, {
  key: 7,
  name: "CS-Club-Hackathon Registration Page 2017",
  description: "A registration page for a 2017 Hackathon hosted by the CSU Stanislaus CS Club and sponsored by Novo Consulting. </br><strong>Technology stack:</strong> LAMP stack project with MySQL, PHP, and a Linux server.",
  projectImg: "./media/images/CS-Club-Hackathon.PNG",
  githubLink: "https://github.com/NLSuarez/CS-Club-Hackathon",
  codepenLink: "",
  websiteLink: "https://hopper.csustan.edu/~ssuarez/cs-club-hackathon/index.html"
}, {
  key: 8,
  name: "Stanislaus Bird Encyclopedia",
  description: "A website built to list all the birds in Stanislaus county in alphabetical order and then supply individual pages full of details for each bird. </br><strong>Technology stack:</strong> Django 1.10 and python 3.5.",
  projectImg: "./media/images/BirdDatabase.PNG",
  githubLink: "https://github.com/NLSuarez/CS4950---Bird-Encyclopedia",
  codepenLink: "",
  websiteLink: ""
}, {
  key: 9,
  name: "Battle Arena",
  description: "A battle arena game with a fully functioning AI operating on a modified Negamax algorithm.</br><strong>Technology stack:</strong> Fully done in python 3.5 on Windows",
  projectImg: "./media/images/BattleArenaSample.PNG",
  githubLink: "https://github.com/NLSuarez/CS4480---Battle-Arena-AI",
  codepenLink: "",
  websiteLink: ""
}, {
  key: 10,
  name: "Sample Biography Page",
  description: "A sample website of a fictional character's life. </br><strong>Technology stack:</strong> HTML and Bootstrap.",
  projectImg: "./media/images/SampleBiography.PNG",
  githubLink: "https://github.com/NLSuarez/AaronWhiteBiographyPage",
  codepenLink: "https://codepen.io/CodeAni/pen/qpzBJQ",
  websiteLink: "https://codepen.io/CodeAni/full/qpzBJQ"
}, {
  key: 11,
  name: "Library Database Website",
  description: "A website for querying a hypothetical library. </br><strong>Technology stack:</strong> LAMP stack project with MySQL, PHP, and a Linux server.",
  projectImg: "./media/images/LibraryDatabase.PNG",
  githubLink: "https://github.com/NLSuarez/CS4250-Library-Database",
  codepenLink: "",
  websiteLink: ""
}, {
  key: 12,
  name: "Bee Pesticide Simulation",
  description: "A simulation meant to demonstrate the interaction between polination, bees, pesticides and the food supply. </br><strong>Technology stack:</strong> Netlogo",
  projectImg: "./media/images/BeePesticideModel.PNG",
  githubLink: "https://github.com/NLSuarez/CS3200-Bee-Pesticide-Simulation",
  codepenLink: "",
  websiteLink: ""
}]; //Classes

class ProjectsSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: currentProjects,
      currentSlide: 1,
      previousSlide: -1
    };
    this.handleSlideSelect = this.handleSlideSelect.bind(this);
  }

  handleSlideSelect(nextSlide) {
    //Adjust current slide by clicking on the previews
    if (nextSlide <= this.state.slides.length && nextSlide > 0) {
      this.setState(Object.assign({}, this.state, {
        currentSlide: nextSlide,
        previousSlide: this.state.currentSlide
      }));
    }
  }

  render() {
    const slides = this.state.slides.map((slide, index) => {
      return /*#__PURE__*/React.createElement(Slide, {
        key: (index + 1).toString(),
        project: slide,
        currentSlide: index + 1 === this.state.currentSlide ? true : false,
        previousSlide: index + 1 === this.state.previousSlide ? true : false,
        justInitialized: this.state.previousSlide === -1 ? true : false
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "slideshow-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "slideshow-main"
    }, /*#__PURE__*/React.createElement(SlideshowControls, {
      projects: this.state.slides,
      currentSlide: this.state.currentSlide,
      handleSlideSelect: this.handleSlideSelect
    }), /*#__PURE__*/React.createElement("div", {
      className: "slide-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "slides"
    }, slides))), /*#__PURE__*/React.createElement(SlideDescription, {
      currentSlide: this.state.slides[this.state.currentSlide - 1]
    }));
  }

} //Handles the generation and styles for a slide image


class Slide extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "slide " + (this.props.justInitialized && this.props.currentSlide ? "initial-slide" : this.props.currentSlide ? "current-slide" : this.props.previousSlide ? "previous-slide" : "")
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.project.projectImg
    })));
  }

} //Handles the appendment of


class SlideDescription extends React.Component {
  render() {
    //Simplify prop currentSlide
    const currentSlide = this.props.currentSlide; //Format description

    const description = {
      __html: currentSlide.description
    }; //Assign the links to the current slide

    let links = [];
    if (currentSlide.websiteLink && currentSlide.websiteLink.length > 0) links.push( /*#__PURE__*/React.createElement("a", {
      key: "website-link",
      className: "project-link",
      title: "Live Website",
      target: "_blank",
      href: currentSlide.websiteLink
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-globe"
    })));
    if (currentSlide.githubLink && currentSlide.githubLink.length > 0) links.push( /*#__PURE__*/React.createElement("a", {
      key: "github-link",
      className: "project-link",
      title: "Github",
      target: "_blank",
      href: currentSlide.githubLink
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-github"
    })));
    if (currentSlide.codepenLink && currentSlide.codepenLink.length > 0) links.push( /*#__PURE__*/React.createElement("a", {
      key: "codepen-link",
      className: "project-link",
      title: "CodePen",
      target: "_blank",
      href: currentSlide.codepenLink
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-codepen"
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "current-slide-details"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "slideName"
    }, currentSlide.name), /*#__PURE__*/React.createElement("p", {
      className: "slideDescription",
      dangerouslySetInnerHTML: description
    }), /*#__PURE__*/React.createElement("div", {
      className: "project-links"
    }, links));
  }

}

class SlideshowControls extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlideSelect = this.handleSlideSelect.bind(this);
    this.handleDecrementSlide = this.handleDecrementSlide.bind(this);
    this.handleIncrementSlide = this.handleIncrementSlide.bind(this);
    this.scrollThumbnails = this.scrollThumbnails.bind(this);
    this.currentThumbnail = React.createRef();
  }

  handleSlideSelect(nextSlideNumber) {
    this.props.handleSlideSelect(nextSlideNumber);
  }

  handleDecrementSlide(e) {
    e.preventDefault();
    let nextSlide = this.props.currentSlide - 1;
    if (nextSlide < 1) nextSlide = this.props.projects.length;
    this.handleSlideSelect(nextSlide);
  }

  handleIncrementSlide(e) {
    e.preventDefault();
    let nextSlide = this.props.currentSlide + 1;
    if (nextSlide > this.props.projects.length) nextSlide = 1;
    this.handleSlideSelect(nextSlide);
  }

  scrollThumbnails() {
    const thumbnailNode = this.currentThumbnail;
    thumbnailNode.scrollIntoView();
  }

  componentDidUpdate() {//this.scrollThumbnails();
    //Commented out but left in in case I want to use this in the future.
    //I didn't like the way it functioned for the moment.
  }

  render() {
    //Map the slides to thumbnails
    const slides = this.props.projects.map((project, index) => {
      const slideNumber = index + 1;

      if (slideNumber === this.props.currentSlide) {
        return /*#__PURE__*/React.createElement("li", {
          ref: node => this.currentThumbnail = node,
          key: slideNumber,
          onClick: () => this.handleSlideSelect(slideNumber)
        }, /*#__PURE__*/React.createElement("img", {
          className: "project-thumbnail current-project-thumbnail",
          src: project.projectImg
        }));
      } else {
        return /*#__PURE__*/React.createElement("li", {
          key: slideNumber,
          onClick: () => this.handleSlideSelect(slideNumber)
        }, /*#__PURE__*/React.createElement("img", {
          className: "project-thumbnail",
          src: project.projectImg
        }));
      }
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "project-tools"
    }, /*#__PURE__*/React.createElement("div", {
      className: "project-thumbnails"
    }, /*#__PURE__*/React.createElement("ul", null, slides)), /*#__PURE__*/React.createElement("div", {
      className: "slide-buttons"
    }, /*#__PURE__*/React.createElement("a", {
      className: "maximize-image"
    }), /*#__PURE__*/React.createElement("a", {
      className: "slide-button",
      href: "#",
      onClick: this.handleDecrementSlide
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-alt-circle-left"
    })), /*#__PURE__*/React.createElement("a", {
      className: "slide-button",
      href: "#",
      onClick: this.handleIncrementSlide
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-alt-circle-right"
    }))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(ProjectsSlideshow, null), document.getElementById('projects'));