import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as AddressActions from "@Store/address/actions";
import { ApplicationState } from "@Store/index";
import LocationSearchInput from "@Components/LocationSearchInput";

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AddressActions, dispatch);

const mapStateToProps = (state: ApplicationState) => ({
  address: state.address.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSearchInput);
