(function () {
  init();

  // Ethnicity fields
  function handleEthnicityFields() {
    // IDs of Ethnicity fields
    const ethnicityCheckBoxesFieldID = 97818790;
    const ethnicityOtherFieldID      = 97818786;
    const ethnicityHiddenFieldID     = 97270677;

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
        value: otherGender ? otherGender.replaceAll( ',', '/' ) : '',
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
        value: otherGender ? otherGender.replaceAll( ',', '/' ) : '',
      } );
    } );
  }

  function handleGenderFields() {
    // IDs of Gender fields
    const genderCheckBoxesFieldID = 97387782;
    const genderOtherFieldID      = 97537509;
    const genderHiddenFieldID     = 97387801;

    // Fields
    const genderCheckBoxesField = loader.getEngine().getDocument().getElementById( genderCheckBoxesFieldID );
    const genderOtherField      = loader.getEngine().getDocument().getElementById( genderOtherFieldID );
    const genderHiddenField     = loader.getEngine().getDocument().getElementById( genderHiddenFieldID );

    //// This is ran every time a checkbox changes from "checked" to "not checked"
    //genderCheckBoxesField.on( 'value-change', function () {
    //  // Get current "state" of checkboxes
    //  const checkBoxes = genderCheckBoxesField.getValue();
    //
    //  /**
    //   * @type {string[]}
    //   */
    //  const values = checkBoxes.values;
    //
    //  if ( values.includes( 'Other' ) ) {
    //  }
    //
    //  const genderValues = checkBoxes.values.join().replaceAll( 'Female', 'F' ).replaceAll( 'Male', 'M' );
    //
    //  // Set comma-separated value to Ethnicity hidden field
    //  // -> "checkbox value 1,checkbox value 2, ..."
    //  genderHiddenField.setValue( { value: genderValues } );
    //} );

    genderCheckBoxesField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = genderCheckBoxesField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        genderHiddenField.setValue( { value: '' } )

        return;
      }

      /**
       * @type {string}
       */
      const otherGender = genderOtherField.getValue().value;

      genderHiddenField.setValue( { value: otherGender ? ('Demographics > Gender Identity: ' + otherGender.replaceAll( ',', '/' )) : '' } )
    } );

    genderOtherField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = genderCheckBoxesField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        genderHiddenField.setValue( { value: '' } )

        return;
      }

      /**
       * @type {string}
       */
      const otherGender = genderOtherField.getValue().value;

      genderHiddenField.setValue( { value: otherGender ? ('Demographics > Gender Identity: ' + otherGender.replaceAll( ',', '/' )) : '' } )
    } )
  }

  function handlePoliticalFields() {
    // Political field IDs
    const politicalDropDownFieldID = 97497873;
    const politicalOtherFieldID    = 97500115;
    const politicalHiddenID        = 97387818;

    // Political fields (as objects)
    const politicalDropDownField = loader.getEngine().getDocument().getElementById( politicalDropDownFieldID );
    const politicalOtherField    = loader.getEngine().getDocument().getElementById( politicalOtherFieldID );
    const politicalHiddenField   = loader.getEngine().getDocument().getElementById( politicalHiddenID );

    // The following is triggered when the "Other Political Affiliation" text field changes
    politicalOtherField.on( 'value-change', function () {
      const dropdownValue = politicalDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ( 'Other' !== dropdownValue.value ) {
        return;
      }

      const other = politicalOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if ( !other ) {
        politicalHiddenField.setValue( { value: '' } );

        return;
      }

      // As user types in field, fill hidden field
      politicalHiddenField.setValue( {
        value: 'Demographics > Political Party: ' + other.replaceAll( ',', '/' ),
      } );
    } );

    // The following is triggered when the "What is your political affiliation" dropdown field changes
    politicalDropDownField.on( 'value-change', function () {
      const dropdownValue = politicalDropDownField.getValue();

      if ( 'Other' === dropdownValue.value ) {
        const other = politicalOtherField.getValue().value;

        if ( !other ) {
          politicalHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        politicalHiddenField.setValue( {
          value: 'Demographics > Political Party: ' + other.replaceAll( ',', '/' ),
        } );

        return;
      }

      // Reset hidden field when value of dropdown is NO LONGER 'Other'
      politicalHiddenField.setValue( { value: '' } );
    } );
  }

  function handleEducationLevelFields() {
    // Education Level field IDs
    const educationLevelDropDownFieldID = 97500085;
    const educationLevelOtherFieldID    = 97500111;
    const educationLevelHiddenFieldID   = 97500113;

    // Education Level fields (as objects)
    const educationLevelDropDownField = loader.getEngine().getDocument().getElementById( educationLevelDropDownFieldID );
    const educationLevelOtherField    = loader.getEngine().getDocument().getElementById( educationLevelOtherFieldID );
    const educationLevelHiddenField   = loader.getEngine().getDocument().getElementById( educationLevelHiddenFieldID );

    // The following is triggered when the "Other Education" text field changes
    educationLevelOtherField.on( 'value-change', function () {
      const dropdownValue = educationLevelDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ( 'Other' !== dropdownValue.value ) {
        return;
      }

      const other = educationLevelOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if ( !other ) {
        educationLevelHiddenField.setValue( { value: '' } );

        return;
      }

      // As user types in field, fill hidden field
      educationLevelHiddenField.setValue( {
        value: 'Demographics > Education: ' + other.replaceAll( ',', '/' ),
      } );
    } );

    // The following is triggered when the "Please choose your highest level of education" dropdown field changes
    educationLevelDropDownField.on( 'value-change', function () {
      const dropdownValue = educationLevelDropDownField.getValue();

      if ( 'Other' === dropdownValue.value ) {
        const other = educationLevelOtherField.getValue().value;

        if ( !other ) {
          educationLevelHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        educationLevelHiddenField.setValue( {
          value: 'Demographics > Education: ' + other.replaceAll( ',', '/' ),
        } );

        return;
      }

      // Reset hidden field when value of dropdown is NO LONGER 'Other'
      educationLevelHiddenField.setValue( { value: '' } );
    } );
  }

  function handleCoachingFields() {
    // Education Level field IDs
    const coachingDropDownFieldID = 97500189;
    const coachingOtherFieldID    = 97500201;
    const coachingHiddenFieldID   = 97500204;

    // Education Level fields (as objects)
    const coachingDropDownField = loader.getEngine().getDocument().getElementById( coachingDropDownFieldID );
    const coachingOtherField    = loader.getEngine().getDocument().getElementById( coachingOtherFieldID );
    const coachingHiddenField   = loader.getEngine().getDocument().getElementById( coachingHiddenFieldID );

    // The following is triggered when the "Other Education" text field changes
    coachingOtherField.on( 'value-change', function () {
      const dropdownValue = coachingDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ( 'Other' !== dropdownValue.value ) {
        return;
      }

      const other = coachingOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if ( !other ) {
        coachingHiddenField.setValue( { value: '' } );

        return;
      }

      // As user types in field, fill hidden field
      coachingHiddenField.setValue( {
        value: 'Coaching lead: ' + other.replaceAll( ',', '/' ),
      } );
    } );

    // The following is triggered when the "Please choose your highest level of education" dropdown field changes
    coachingDropDownField.on( 'value-change', function () {
      const dropdownValue = coachingDropDownField.getValue();

      if ( 'Other' === dropdownValue.value ) {
        const other = coachingOtherField.getValue().value;

        if ( !other ) {
          coachingHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        coachingHiddenField.setValue( {
          value: 'Coaching lead: ' + other.replaceAll( ',', '/' ),
        } );

        return;
      }

      // Reset hidden field when value of dropdown is NO LONGER 'Other'
      coachingHiddenField.setValue( { value: '' } );
    } );
  }

  function handleBecomeMemberFields() {
    const becomeAMemberCheckBoxFieldID = 97500126;
    const becomeAMemberOtherFieldID    = 97537661;
    const becomeAMemberHiddenFieldID   = 97500129;

    const becomeAMemberCheckBoxField = loader.getEngine().getDocument().getElementById( becomeAMemberCheckBoxFieldID );
    const becomeAMemberOtherField    = loader.getEngine().getDocument().getElementById( becomeAMemberOtherFieldID );
    const becomeAMemberHiddenField   = loader.getEngine().getDocument().getElementById( becomeAMemberHiddenFieldID );

    becomeAMemberCheckBoxField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = becomeAMemberCheckBoxField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        becomeAMemberHiddenField.setValue( { value: '' } )

        return;
      }

      /**
       * @type {string}
       */
      const otherBecomeAMember = becomeAMemberOtherFieldID.getValue().value;

      becomeAMemberHiddenField.setValue( { value: otherBecomeAMember ? ('AA Other Help: ' + otherBecomeAMember.replaceAll( ',', '/' )) : '' } )
    } );

    becomeAMemberOtherField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = becomeAMemberCheckBoxField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        becomeAMemberHiddenField.setValue( { value: '' } )

        return;
      }

      /**
       * @type {string}
       */
      const otherBecomeAMember = becomeAMemberOtherField.getValue().value;

      becomeAMemberHiddenField.setValue( { value: otherBecomeAMember ? ('AA Other Help: ' + otherBecomeAMember.replaceAll( ',', '/' )) : '' } )
    } )
  }

  function handleIssuesFields() {
    // Issues fields IDs
    const issuesCheckBoxID    = 97500207;
    const issuesOtherFieldID  = 97537712;
    const issuesHiddenFieldID = 97500243;

    // Issues fields (as objects)
    const issuesCheckBoxField = loader.getEngine().getDocument().getElementById( issuesCheckBoxID );
    const issuesOtherField    = loader.getEngine().getDocument().getElementById( issuesOtherFieldID );
    const issuesHiddenField   = loader.getEngine().getDocument().getElementById( issuesHiddenFieldID );

    issuesCheckBoxField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = issuesCheckBoxField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        issuesHiddenField.setValue( { value: '' } )

        return;
      }

      /**
       * @type {string}
       */
      const otherIssues = issuesOtherField.getValue().value;

      issuesHiddenField.setValue( { value: otherIssues ? ('Issues > ' + otherIssues.replaceAll( ',', '/' )) : '' } )
    } );

    issuesOtherField.on( 'value-change', function () {
      /**
       * @type {string[]}
       */
      const checkBoxes = issuesCheckBoxField.getValue().values;

      if ( !checkBoxes.includes( 'Other' ) ) {
        issuesHiddenField.setValue( { value: '' } )

        return;
      }

      /**
       * @type {string}
       */
      const otherIssues = issuesOtherField.getValue().value;

      issuesHiddenField.setValue( { value: otherIssues ? ('Issues > ' + otherIssues.replaceAll( ',', '/' )) : '' } )
    } )
  }

  function handleContactFields() {
    // Contact field IDs
    const contactDropDownFieldID = 97500250;
    const contactOtherFieldID    = 97500253;
    const contactHiddenFieldID   = 97500331;

    // Contact fields (as objects)
    const contactDropDownField = loader.getEngine().getDocument().getElementById( contactDropDownFieldID );
    const contactOtherField    = loader.getEngine().getDocument().getElementById( contactOtherFieldID );
    const contactHiddenField   = loader.getEngine().getDocument().getElementById( contactHiddenFieldID );

    // The following is triggered when the "Other Point of Contact" text field changes
    contactOtherField.on( 'value-change', function () {
      const dropdownValue = contactDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ( 'Other' !== dropdownValue.value ) {
        return;
      }

      const other = contactOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if ( !other ) {
        contactHiddenField.setValue( { value: '' } );

        return;
      }

      // As user types in field, fill hidden field
      contactHiddenField.setValue( {
        value: 'Contact mode: ' + other.replaceAll( ',', '/' ),
      } );
    } );

    // The following is triggered when the "How fo you want Vote Run lead..." dropdown field changes
    contactDropDownField.on( 'value-change', function () {
      const dropdownValue = contactDropDownField.getValue();

      if ( 'Other' === dropdownValue.value ) {
        const other = contactOtherField.getValue().value;

        if ( !other ) {
          contactHiddenField.setValue( { value: '' } );

          return;
        }

        // As user types in field, fill hidden field
        contactHiddenField.setValue( {
          value: 'Contact mode:' + other.replaceAll( ',', '/' ),
        } );

        return;
      }

      // Reset hidden field when value of dropdown is NO LONGER 'Other'
      contactHiddenField.setValue( { value: '' } );
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
