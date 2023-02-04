import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.refImage = React.createRef();
        this.state = {span: 0};
    }
    componentDidMount() {
        // console.log(this.refImage.current.clientHeight);
        this.refImage.current.addEventListener('load', this.setImage)
    }
    setImage = () => {
        const height = this.refImage.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({span: spans})
    }
    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.refImage} alt={description} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard;