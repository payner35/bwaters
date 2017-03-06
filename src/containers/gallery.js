import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import gallery from '../components/gallery';


import * as GalleryActions from '../actions/gallery'


const mapStateToProps = ({ gallery }) => ({
    lightboxIsOpen: gallery.lightboxIsOpen,
    currentImage: gallery.currentImage
});

console.log(GalleryActions);

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...GalleryActions,
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(gallery);

