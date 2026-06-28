import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Image } from '@/components/ui';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import KeyboardAwareScrollView from '@/components/ui/KeyboardAwareScrollView';
import { loginSchema, LoginSchema } from '@/validation/login.validation';

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginSchema>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  const onSubmit = (data: LoginSchema) => {
    // TODO: integrar com API de autenticação
    console.log(data);
  };

  const handleRegister = () => {
    router.push('/(auth)/Signup');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1C1C1E]">
      <KeyboardAwareScrollView
        bottomOffset={24}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
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
                autoCapitalize="none"
                borderColor="#3A3A3A"
                control={control}
                inputTextColor="#FFFFFF"
                keyboardType="email-address"
                label="EMAIL"
                leftIcon={{
                  name: 'Mail',
                  size: 20,
                  color: '#ffffff',
                  strokeWidth: 1.5,
                }}
                name="email"
                placeholder="Digite seu email"
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

              <Button
                withoutDelay
                className="justify-between px-4 py-2"
                color="#00875F"
                isLoading={isSubmitting}
                rightIcon={{
                  name: 'ArrowRight',
                  size: 22,
                  color: '#fff',
                  strokeWidth: 2,
                }}
                text="Logar"
                textClassName="font-poppins_semibold text-base"
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>

          <View className="mt-12 gap-4">
            <Text className="font-poppins_regular text-center text-sm text-[#8B8B8B]">
              Ainda não tem uma conta?
            </Text>

            <Button
              wired
              withoutDelay
              className="justify-between px-4 py-2"
              color="#00875F"
              rightIcon={{
                name: 'ArrowRight',
                size: 22,
                strokeWidth: 2,
              }}
              text="Cadastrar"
              textClassName="font-poppins_semibold text-base"
              onPress={handleRegister}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
