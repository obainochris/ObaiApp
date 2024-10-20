import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  return (
    <StripeProvider
      publishableKey="pk_test_51P89GsHkvVkl3EOBpJaGb7S8BXaKzREi0Q2LejDcZlkCb2SXV4F0VpaxRPOSNXLKdLcWhk91JXejSFiyAOW6WUfg0017D7mHmX"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{ObaiApp}}" // required for Apple Pay
    >
      // Your app code here
    </StripeProvider>
  );
}