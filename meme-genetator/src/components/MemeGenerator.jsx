import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        //console.log(memes[10]);
        this.setState({
          allMemeImages: memes,
          isLoading: false
        });
      });
  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    //get a random number in (index)
    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length);
    //get the meme from the index
    const randomMemeImg = this.state.allMemeImages[randNum].url;
    //const randomMemeImg = this.state.allMemeImages[randNum].url;
    //set randomImg to the grapped random item
    this.setState({ randomImg: randomMemeImg });
  };
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <br />
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <p>{this.state.isLoading}</p>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
export default MemeGenerator;
