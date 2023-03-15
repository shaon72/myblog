import mailchimp from '@mailchimp/mailchimp_marketing';
 
mailchimp.setConfig({
  apiKey: "33c063b51caf06705c7b66a582bf88c4-us14",
  server: "us14", // e.g. us1
});
 
export default async (req, res) => {
  const { email } = req.body;
 
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
 
  try {
    await mailchimp.lists.addListMember("9cbc38ecd2", {
      email_address: email,
      status: 'subscribed',
    });
 
    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
