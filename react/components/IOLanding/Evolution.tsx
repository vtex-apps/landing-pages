import React from "react";
import { FormattedMessage } from "react-intl";

import CodeSampleImage from "../../images/CodeSample.svg";
import BackgroundEffects from "../../images/BackgroundEffects.svg";

const EvolutionSection = () => (
  <section className="flex vh-100 ph9">
    <div
      className="w-50 h-75 bg-muted-3 flex justify-center items-center"
      style={{ backgroundImage: `url(${BackgroundEffects})` }}
    >
      <img src={CodeSampleImage} className="z-5 c-muted-1" alt="code-sample" />
    </div>
    <div className="c-muted-1 h-75 w-50 pl10 flex flex-column justify-center">
      <p className="c-muted-1 t-small w-90">
        <FormattedMessage id="evolution.focus" />
      </p>
      <p className="c-muted-1 f1 mt1 mb1 w-75">
        <FormattedMessage id="evolution.evolution" />
      </p>
      <p className="c-muted-1 t-body w-90 lh-copy mb7">
        <FormattedMessage id="evolution.perspective" />
      </p>
      <p className="c-muted-1 t-body w-90 mt7 mb2">
        <FormattedMessage id="evolution.vtexio" />
      </p>
      <p className="c-muted-1 t-body w-90 lh-copy">
        <FormattedMessage id="evolution.vtexio.description" />
      </p>
    </div>
  </section>
);

export default EvolutionSection;
