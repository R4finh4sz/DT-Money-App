import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { Image } from '@/components/ui';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import KeyboardAwareScrollView from '@/components/ui/KeyboardAwareScrollView';
import { signupSchema, SignupSchema } from '@/validation/signup.validation';

const SignupScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupSchema>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupSchema) => {
    // TODO: integrar com API de cadastro
    console.log(data);
  };

  const handleLogin = () => {
    router.push('/(auth)/login');
  };

  return (
    <KeyboardAwareScrollView
      bottomOffset={24}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      // eslint-disable-next-line react-native/no-color-literals
      style={{ backgroundColor: '#1C1C1E' }}
    >
      <View className="flex-1 px-6 pb-8 pt-12">
        <View className="flex-1 gap-10">
          <View className="mb-8 flex-row items-center justify-center gap-3">
            <Image
              className="h-10 w-48"
              contentFit="contain"
              source={require('@/assets/images/Logo.png')}
            />
          </View>

          <View className="gap-6">
            <Input
              autoCapitalize="words"
              autoCorrect={false}
              borderColor="#3A3A3A"
              control={control}
              inputTextColor="#FFFFFF"
              label="NOME"
              leftIcon={{
                name: 'Mail',
                size: 20,
                color: '#8B8B8B',
                strokeWidth: 1.5,
              }}
              name="name"
              placeholder="Seu nome completo"
              variant="underline"
            />

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              borderColor="#3A3A3A"
              control={control}
              inputTextColor="#FFFFFF"
              keyboardType="email-address"
              label="EMAIL"
              leftIcon={{
                name: 'Mail',
                size: 20,
                color: '#8B8B8B',
                strokeWidth: 1.5,
              }}
              name="email"
              placeholder="mail@exemplo.br"
              variant="underline"
            />

            <Input
              isPassword
              borderColor="#3A3A3A"
              control={control}
              inputTextColor="#FFFFFF"
              label="SENHA"
              leftIcon={{
                name: 'Lock',
                size: 20,
                color: '#8B8B8B',
                strokeWidth: 1.5,
              }}
              name="password"
              placeholder="Sua senha"
              variant="underline"
            />

            <Input
              isPassword
              borderColor="#3A3A3A"
              control={control}
              inputTextColor="#FFFFFF"
              label="SENHA"
              leftIcon={{
                name: 'Lock',
                size: 20,
                color: '#8B8B8B',
                strokeWidth: 1.5,
              }}
              name="confirmPassword"
              placeholder="Confirme sua senha"
              variant="underline"
            />

            <Button
              withoutDelay
              className="mt-4 py-2"
              color="#00995D"
              isLoading={isSubmitting}
              rightIcon={{
                name: 'ArrowRight',
                size: 22,
                color: '#fff',
                strokeWidth: 2,
              }}
              text="Cadastrar"
              textClassName="font-poppins_semibold text-base"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>

        <View className="mt-12 gap-4">
          <Text className="font-poppins_regular text-sm text-[#8B8B8B]">
            Ja tem uma conta?
          </Text>

          <Button
            wired
            withoutDelay
            className="py-2"
            color="#00995D"
            rightIcon={{
              name: 'ArrowRight',
              size: 22,
              strokeWidth: 2,
            }}
            text="Acessar"
            textClassName="font-poppins_semibold text-base"
            onPress={handleLogin}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
