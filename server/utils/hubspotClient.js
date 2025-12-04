import hubspot from '@hubspot/api-client';

const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

export default hubspotClient;
