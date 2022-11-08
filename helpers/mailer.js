const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Ease email verification",
    html: `<div><div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#4040c9"><img src="https://res.cloudinary.com/ddim3wrb0/image/upload/v1667420109/Ease/logo_ukyvn4.png" alt="" style="width:60px"><span>Action Required: Activate your Ease account</span></div><div style="padding:1rem 0;border-top:1px solid #f3f0f0;border-bottom:1px solid #f3f0f0"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">To complete your registration on Ease, Please confirm tour account.</span></div><br><a href="${url}" style="width:200px;padding:10px 15px;background:rgba(93,93,255,.644);color:#f0f8ff;text-decoration:none;font-weight:600">Confirm your account</a></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
