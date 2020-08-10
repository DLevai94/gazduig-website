import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (event, context) => {
  try {
    await sendgrid.send({
      to: context.emailAddress,
      from: 'bence@gazduig.com',
      subject: 'IG Esettanulmany',
      text: 'Hello, world!',
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ error: '' }),
  };
};
