import React from "react";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: "", imagePreviewUrl: "" };
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('handle uploading:', this.state.file);
    }
    handleImageChange(item) {
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
    }
    render() {
        let { imagePreviewUrl } = this.state;
        return (
            <div className="wrapper-image">
                <div className="imgPreview">
                    {imagePreviewUrl ? <img src={imagePreviewUrl} /> :
                        <div></div>}
                </div>
                <i onClick={() => this.inputImg.click()} className="fa fa-camera icon-style" aria-hidden="true"></i>
                <form style={{ display: 'none' }} onSubmit={(event) => this.handleSubmit(event)}>
                    <input ref={component => this.inputImg = component} type="file" accept="image/*" onChange={(item) => this.handleImageChange(item)} />
                </form>

            </div>

        );
    }
}
export default ImageUpload;