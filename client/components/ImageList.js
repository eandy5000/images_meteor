import React, {Component} from 'react'
import axios from 'axios'

class ImageList extends Component {
    constructor(props) {
        super(props)

        this.state={
            images: []
        }
    }

    renderList() {
        const {images} = this.state
        const filteredImages = images.filter(item => item.is_album === false)

        return filteredImages.map(item => {
            return (
                <div key={item.id}>
                    {item.title}<br/>
                    <img src={item.link} width="300" />
                </div>)
        })
    }

    renderLoading() {
        return (<div>loading...</div>)
    }

    render() {
        console.log(this.state.images)
        if(this.state.images.length === 0) {
           return this.renderLoading()
        }
        return (
            <div>
                {this.renderList()}
            </div>
        )

    }

    componentWillMount() {
        axios.get("https://api.imgur.com/3/gallery/hot/viral/0")
             .then(res => {
                this.setState({images: res.data.data})
             })
    }

}

export default ImageList
