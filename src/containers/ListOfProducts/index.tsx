import { connect } from "react-redux";
import { ApplicationState } from "@Store/index";
import ListOfProducts from "@Components/ListOfProducts";

const mapStateToProps = (state: ApplicationState) => ({
  address: state.address.data,
});

export default connect(mapStateToProps)(ListOfProducts);
