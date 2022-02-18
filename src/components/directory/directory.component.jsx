import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { DirectoryMenu, DirectoryItem } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {sections.map(({ id, index = 0, ...otherSectionProps }) => (
      <DirectoryItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
