document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city');
    const zipcodeInput = document.getElementById('zipcode');

    citySelect.addEventListener('change', () => {
        const selectedCity = citySelect.value;
        const zipCodeMap = {
            'New York': '10001',
            'Los Angeles': '90001',
            'Washington D.C.': '20001',
            'Austin': '73301',
            'Miami': '33101'
        };

        zipcodeInput.value = zipCodeMap[selectedCity] || '';
    });
});
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
      alert('Form submitted successfully!');
      this.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
