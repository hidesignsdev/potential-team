import React from "react";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "",
            imagePreviewUrl: "",
            loadingImage: false
        };
    }
    handleImageChange(item) {
        const {
            form: { setFieldValue }
        } = this.props;
        item.preventDefault();
        let reader = new FileReader();
        let file = item.target.files[0];
        reader.onloadstart = () => {
            this.setState({
                loadingImage: true
            })
        }
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                loadingImage: false
            });
        }
        if (file) {
            reader.readAsDataURL(file);
            setFieldValue('file', file)
            //     reader.readAsDataURL(file);
            //     onChange && onChange(file)
        }

    }
    render() {
        let { imagePreviewUrl, loadingImage } = this.state;
        return (
            <div className="wrapper-image">
                <div className="imgPreview ">
                    {loadingImage ? <div className="spinner-border text-light loading-style"></div> : null}
                    {imagePreviewUrl ? <img src={imagePreviewUrl} alt="" /> : null}
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