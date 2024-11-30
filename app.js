    const eventSelect = document.getElementById('event-select');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function updateCountdown(eventDate) {
      const interval = setInterval(function() {
        const now = new Date();
        const timeRemaining = new Date(eventDate) - now;

        if (timeRemaining <= 0) {
          clearInterval(interval);
          daysElement.textContent = '00';
          hoursElement.textContent = '00';
          minutesElement.textContent = '00';
          secondsElement.textContent = '00';
        } else {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

          daysElement.textContent = days < 10 ? '0' + days : days;
          hoursElement.textContent = hours < 10 ? '0' + hours : hours;
          minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
          secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
        }
      }, 1000);
    }

    // Event listener for the select dropdown to change the countdown event
    eventSelect.addEventListener('change', function() {
      updateCountdown(eventSelect.value);
    });

    // Initialize with the default event
    updateCountdown(eventSelect.value);