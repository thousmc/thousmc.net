document.addEventListener('DOMContentLoaded', () => {
    // These functions now come from the `dateFns` object
    const { differenceInYears, differenceInDays, getDaysInYear } = dateFns;

    const startDate = new Date('2019-10-03');
    const now = new Date();

    const fullYears = differenceInYears(now, startDate);

    const lastAnniversary = new Date(startDate);
    lastAnniversary.setFullYear(now.getFullYear());
    
    if (now < lastAnniversary) {
      lastAnniversary.setFullYear(now.getFullYear() - 1);
    }

    const daysSinceAnniversary = differenceInDays(now, lastAnniversary);
    const daysInCurrentYear = getDaysInYear(lastAnniversary);
    const yearFraction = daysSinceAnniversary / daysInCurrentYear;
    
    const totalAge = fullYears + yearFraction;

    const ageElement = document.getElementById('world-age');
    if (ageElement) {
      ageElement.textContent = totalAge.toFixed(5);
    }
});