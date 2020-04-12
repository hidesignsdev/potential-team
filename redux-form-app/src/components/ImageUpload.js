import React from "react";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: "", imagePreviewUrl: "" };
    }
    handleImageChange(item) {
        const { input: { onChange } } = this.props;

        item.preventDefault();
        let reader = new FileReader();
        let file = item.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
        onChange && onChange({fileObj: item.target.files[0], fileReader: reader})
    }
    render() {
        let { imagePreviewUrl } = this.state;
        return (
            <div className="wrapper-image">
                <div className="imgPreview">
                    {imagePreviewUrl ? <img src={imagePreviewUrl} /> :
                        <div></div>}
                </div>
                <i onClick={() => {
                    this.inputImg.click()
                }} className="fa fa-camera icon-style" aria-hidden="true"></i>
                <input style={{ display: 'none' }}
                    ref={component => this.inputImg = component}
                    type="file" accept="image/*"
                    onChange={(item) => this.handleImageChange(item)} />

            </div>

        );
    }
}
export default ImageUpload;