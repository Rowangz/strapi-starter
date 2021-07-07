module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN'), //Required if you have an account with multiple domains
        host: env('MAILGUN_HOST', 'api.eu.mailgun.net'), //Optional. If domain region is Europe use 'api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'beheer@vanwijk.online',
        defaultReplyTo: 'beheer@vanwijk.online',
      },
    },
    // ...
  });