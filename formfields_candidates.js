(function () {
  init();

  // Ethnicity fields
  function handleEthnicityFields() {
    // IDs of Ethnicity fields
    const ethnicityCheckBoxesFieldID = 97960345;
    const ethnicityOtherFieldID      = 97960346;
    const ethnicityHiddenFieldID     = 97960347;

    // Fields
    const ethnicityCheckBoxField = loader.getEngine().getDocument().getElementById( ethnicityCheckBoxesFieldID );
    const ethnicityOtherField    = loader.getEngine().getDocument().getElementById( ethnicityOtherFieldID );
    const ethnicityHiddenField   = loader.getEngine().getDocument().getElementById( ethnicityHiddenFieldID );

    ethnicityCheckBoxField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = ethnicityCheckBoxField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        ethnicityHiddenField.setValue( { value: '' } );

        return;
      }

      /**
       * @type {string}
       */
      const otherGender = ethnicityOtherField.getValue().value;

      ethnicityHiddenField.setValue( {
        value: otherGender ? ('Demographics > Ethnicity: ' + otherGender.replaceAll( ',', '/' )) : '',
      } );
    } );

    ethnicityOtherField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = ethnicityCheckBoxField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        ethnicityHiddenField.setValue( { value: '' } );

        return;
      }

      /**
       * @type {string}
       */
      const otherGender = ethnicityOtherField.getValue().value;

      ethnicityHiddenField.setValue( {
        value: otherGender ? ('Demographics > Ethnicity: ' + otherGender.replaceAll( ',', '/' )) : '',
      } );
    } );
  }

  function init() {
    window.addEventListener( 'load', function () {
      handleEthnicityFields();
      handleGenderFields();
      handlePoliticalFields();
      handleEducationLevelFields();
      handleBecomeMemberFields();
      handleCoachingFields();
      handleIssuesFields();
      handleContactFields();
    } );
  }
})();
