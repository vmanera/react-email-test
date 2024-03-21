import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
  } from "@react-email/components";
  import * as React from "react";
  
  interface StackOverflowTipsEmailProps {
    tips?: { id: number; description: string }[];
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  const PropDefaults: StackOverflowTipsEmailProps = {
    tips: [
      {
        id: 1,
        description:
          'HBF Run for a Reason 2024',
      },
      {
        id: 1,
        description:
          "Perth, WA",
      },
      {
        id: 1,
        description:
          'Sunday, 19 May 2024',
      },
    ],
  };
  
  export const StackOverflowTipsEmail = ({
    tips = [],
  }: StackOverflowTipsEmailProps) => (
    <Html>
      <Head />
      <Preview>Stack overflow tips for searching</Preview>
      <Body style={main}>
        <Container style={container}>
          
  
          <Section style={header}>
          <Section style={logo}>
            <Img width={800} style={{margin: 'auto', maxWidth: '100%;'}} src={`https://rnsecureap.blob.core.windows.net/publiccontainer/eventlogo/Email/49818/49818_logo.png`} />
            {/* <Img width={800} style={{margin: 'auto', maxWidth: '100%;'}} src={`${baseUrl}/static/HBF-run.png`} /> */}
          </Section>
            <Row>
              <Column style={headerContent}>
                <Heading style={headerContentTitle}>
                  See you at the start line, legend!
                </Heading>
                <Text style={headerContentSubtitle}>
                Welcome to HBF Run for a Reason 2024, [registrantName].
                </Text>
              </Column>
            </Row>
          </Section>
  
          <Section style={content}>
            <Text style={paragraph}>
              Whether you're running, walking, or wheeling for a reason close to your heart or just to get your heart pumping - we want to thank you. We couldn't give back to the WA community like we have for 11 years running without you.
            </Text>
  
            <Hr style={divider} />
  
            <Heading as="h2" style={title}>
              REGISTRATION DETAILS
            </Heading>

            <ul>
              {tips.map((tip) => (
                <li key={tip.id}>
                  <Text style={paragraph}>{tip.description}</Text>
                </li>
              ))}
            </ul>
  
            <Text style={paragraph}>
              The more information you can put in the search bar, the more likely
              you will be to either find the answer you need or feel confident
              that no one else has asked the question before.
            </Text>
  
            <Hr style={divider} />

            <Section>
            <Img width={600} style={{maxWidth: '100%'}} src={`https://www.registernow.com.au/secure/images/bulkemail/clients/1949/Email%20Signature%20(600x300)%20(3).jpg`} />
            {/* <Img width={600} style={{maxWidth: '100%'}} src={`${baseUrl}/static/hbf-run-share-your-photos.png`} /> */}

            </Section>
          </Section>
        </Container>
  
        <Section style={footer}>
          <Text style={footerText}>
          You have been sent this email as you are a registered user of our service. 
          If you have received this email in error, please forward this email and let us know at <Link style={footerLink} href="support@registernow.com.au">support@registernow.com.au</Link>
          </Text>
  
          <Link href="/" style={footerLink}>
            Unsubscribe from emails like this{" "}
          </Link>
          <Link href="/" style={footerLink}>
            Edit email settings{" "}
          </Link>
          <Link href="/" style={footerLink}>
            Contact us
          </Link>
          <Link href="/" style={footerLink}>
            Privacy
          </Link>
  
          <Hr style={footerDivider} />
  
          
          <Text style={footerAddress}>
            <strong>Stack Overflow</strong>, 110 William Street, 28th Floor, New
            York, NY 10038
          </Text>
        </Section>
      </Body>
    </Html>
  );
  
  StackOverflowTipsEmail.PreviewProps = {
    tips: PropDefaults.tips,
  } as StackOverflowTipsEmailProps;
  
  export default StackOverflowTipsEmail;
  
  const main = {
    backgroundColor: "#f3f3f5",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  };
  
  const headerContent = { padding: "20px 30px 15px" };
  
  const headerContentTitle = {
    color: "#fff",
    fontSize: "27px",
    fontWeight: "bold",
    lineHeight: "27px",
  };
  
  const headerContentSubtitle = {
    color: "#fff",
    fontSize: "17px",
  };
  
  const headerImageContainer = {
    padding: "30px 10px",
  };
  
  const headerImage = {
    maxWidth: "100%",
  };
  
  const title = {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "21px",
    color: "#0c0d0e",
  };
  
  const paragraph = {
    fontSize: "15px",
    lineHeight: "21px",
    color: "#3c3f44",
  };
  
  const divider = {
    margin: "30px 0",
  };
  
  const container = {
    width: "680px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  };
  
  const footer = {
    width: "680px",
    maxWidth: "100%",
    margin: "32px auto 0 auto",
    padding: "0 30px",
  };
  
  const content = {
    padding: "30px 30px 40px 30px",
  };
  
  const logo: React.CSSProperties = {
    display: "flex",
    background: "#f3f3f5",
    margin: 'auto'
  };
  
  const header = {
    borderRadius: "5px 5px 0 0",
    display: "flex",
    flexDireciont: "column",
    backgroundColor: "#00a5b0",
  };
  
  const buttonContainer = {
    marginTop: "24px",
    display: "block",
  };
  
  const button = {
    backgroundColor: "#0095ff",
    border: "1px solid #0077cc",
    fontSize: "17px",
    lineHeight: "17px",
    padding: "13px 17px",
    borderRadius: "4px",
    maxWidth: "120px",
    color: "#fff",
  };
  
  const footerDivider = {
    ...divider,
    borderColor: "#d6d8db",
  };
  
  const footerText = {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
    margin: "0",
  };
  
  const footerLink = {
    display: "inline-block",
    color: "#9199a1",
    textDecoration: "underline",
    fontSize: "12px",
    marginRight: "10px",
    marginBottom: "0",
    marginTop: "8px",
  };
  
  const footerAddress = {
    margin: "4px 0",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
  };
  
  const footerHeart = {
    borderRadius: "1px",
    border: "1px solid #d6d9dc",
    padding: "4px 6px 3px 6px",
    fontSize: "11px",
    lineHeight: "11px",
    fontFamily: "Consolas,monospace",
    color: "#e06c77",
    maxWidth: "min-content",
    margin: "0 0 32px 0",
  };
  