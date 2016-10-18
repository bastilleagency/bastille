var form = {
  data: {
    hidden: false,
    hiddenOnLoad: true,
    submitted: false,
    page: '',
    candidate_inputs: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: ''
    },
    client_inputs: {
      your_name: '',
      company: '',
      email: '',
      phone_number: ''
    },
    inputs: {
      first_name: '',
      last_name: '',
      your_name: '',
      email: '',
      phone_number: '',
      file: ''
    },
    errorMessage: ''
  },
  methods: {
    validate: function(event){
      this.errorMessage = '';
      if(this.validateInputs()){
        this.hidden = true;
        setTimeout(() => {
          this.submitted = true;
          event.target.submit();
        }, 800);
      }
      else {
        this.errorMessage = 'Please complete the form before submitting';
      }
    },
    validateInputs: function(){
      var validated = 0;
      var inputs    = 0;
      var expected_inputs = (this.page == 'Client') ? this.client_inputs : this.candidate_inputs;

      for(var field in expected_inputs){
        inputs += 1;
        validated += (!!this.inputs[field].length) ? 1 : 0;
      }

      return validated == inputs;
    }
  },
  ready: function(){
    this.hiddenOnLoad = false;
  }
};


module.exports = form;
