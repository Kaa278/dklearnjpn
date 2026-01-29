const Kuroshiro = require('kuroshiro');
console.log('Kuroshiro export:', Kuroshiro);
try {
    const k = new Kuroshiro();
    console.log('Instance created successfully');
} catch (e) {
    console.log('Error creating instance:', e.message);
    if (Kuroshiro.default) {
        console.log('Trying default export...');
        try {
            const k2 = new Kuroshiro.default();
            console.log('Instance created from default');
        } catch (e2) {
            console.log('Error creating from default:', e2.message);
        }
    }
}
